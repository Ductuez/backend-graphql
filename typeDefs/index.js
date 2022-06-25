import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
  }
  type Token {
    jwt: ID!
  }
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
    hello: String
  }
  type Mutation {
    signup(email: String!, username: String!, password: String!): User
    login(email: String, username: String, password: String!): Token!
  }
`;
