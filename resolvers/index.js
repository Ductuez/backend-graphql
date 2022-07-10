import {
  getPods,
  getPod,
  getUser,
  getUsers,
  getOilVape,
  getCategory,
  signup,
  login,
  createPod,
} from "./common";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getUsers,
    getUser,
    getPods,
    getPod,
    getOilVape,
    getCategory,
  },

  Mutation: {
    signup,
    login,
    createPod,
  },
};
