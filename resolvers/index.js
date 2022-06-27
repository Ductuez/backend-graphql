import { schemaUser, schemaPod, schemaOilVape } from "../models/index";
import Auth from "../services/auth.service";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getUsers: () => schemaUser.find(),

    getUser: async (_, { id }, context) => {
      if (!context.userId) throw new Error("You must be authenticated!");
      if (context.userId !== id)
        throw new Error("You can only see you own datas little fella!");

      return schemaUser.findById(id);
    },

    getPods: () => schemaPod.find(),

    getPod: async (_, { id }, context) => {
      return schemaPod.findById(id);
    },

    getOilVape: () => schemaOilVape.find(),
  },

  Mutation: {
    signup: async (_, { email, username, password }) => {
      try {
        const hashedPwd = await Auth.hashPassword(password);
        const user = new schemaUser({ email, username, password: hashedPwd });
        const resultUser = await user.save();

        return resultUser;
      } catch (error) {
        console.log(error);
      }
    },

    login: async (_, { email, username, password }) => {
      if (!username && !email) throw new Error("email or username required");
      const userPayload = email ? { email } : { username };
      const user = await schemaUser.findOne(userPayload);
      if (!user) throw new Error("Unknown user", userPayload);

      const correctPassword = await Auth.matchPasswords(
        password,
        user.password
      );
      if (!correctPassword) throw new Error("invalid password");

      return {
        jwt: Auth.generateJwt({
          userId: user.id,
          username: user.username,
          email: user.email,
        }),
      };
    },

    createPod: async (
      _,
      { name, category, flavor, countOfUse, brand },
      context
    ) => {
      try {
        if (!context.userId) throw new Error("You must be authenticated!");
        const pod = new schemaPod({
          name,
          category,
          flavor,
          countOfUse,
          brand,
        });
        const result = await pod.save();
        console.log(result);
        return result;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
