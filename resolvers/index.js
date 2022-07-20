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
  getPromotion,
  getPromotions,
  createPromotion,
} from './common';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getUsers,
    getUser,
    getPods,
    getPod,
    getOilVape,
    getCategory,
    getPromotion,
    getPromotions,
  },

  Mutation: {
    signup,
    login,
    createPod,
    createPromotion,
  },
};
