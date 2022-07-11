import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { resolvers } from './resolvers/index';
import { typeDefs } from './typeDefs/index';
import Auth from './services/auth.service';
// Provide resolver functions for your schema fields

const connectDB = () => {
  try {
    mongoose
      .connect(
        'mongodb+srv://tuehd:0917977835@cluster0.r5mdp.mongodb.net/?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      )
      .then(() => {
        console.log('oke db');
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      return {
        ...req,
        userId: req ? Auth.getUserId({ req }) : null,
      };
    },
  });

  connectDB();

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/',
  });

  // Modified server startup
  await new Promise(resolve =>
    httpServer.listen({ port: process.env.PORT || 4000 }, resolve),
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
