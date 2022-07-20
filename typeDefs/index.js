import { gql } from 'apollo-server-express';
import User from './user';
import Pod from './pod';
import eNum from './enum';
import Category from './category';
import Accessory from './accessory';
import Promotion from './promotion';

export const typeDefs = gql`
  ${User}
  ${Pod}
  ${eNum}
  ${Category}
  ${Accessory}
  ${Promotion}

  type Query {
    hello: String
    getUser(id: ID!): User
    getUsers: [User]
    getPods: [Pod]
    getPod(id: ID!): Pod
    getOilVape: [OilVape]
    getCategory: [Category]
    getAccessory: [Accessory]
    getPromotions: [Promotion]
    getPromotion(id: ID!): Promotion
  }

  type Mutation {
    signup(email: String!, username: String!, password: String!): User
    login(email: String, username: String, password: String!): Token!
    createPod(input: InputCreatePod): Pod
    createPromotion(input: InputCreatePromotion): Promotion
  }
`;
