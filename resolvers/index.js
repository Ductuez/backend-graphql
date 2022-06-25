import User from "../models/user";
import Auth from "../services/auth.service";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getUsers: () => User.find(),

    getUser: async (_, { id }, context) => {
      if (!context.userId) throw new Error("You must be authenticated!");
      if (context.userId !== id)
        throw new Error("You can only see you own datas little fella!");

      return User.findById(id);
    },
  },

  Mutation: {
    signup: async (_, { email, username, password }) => {
      console.log("zo");
      try {
        console.log("mutation");
        const hashedPwd = await Auth.hashPassword(password);
        const user = new User({ email, username, password: hashedPwd });
        const resultUser = await user.save();

        return resultUser;
      } catch (error) {
        console.log(error);
      }
    },

    login: async (_, { email, username, password }) => {
      if (!username && !email) throw new Error("email or username required");
      const userPayload = email ? { email } : { username };
      const user = await User.findOne(userPayload);
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
  },
};
