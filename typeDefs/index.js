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

  type OilVape {
    id: ID!
    name: String
    flavor: String
    brand: String
    ml: String
  }

  enum Category {
    SOBO
  }

  type Pod {
    id: ID!
    name: String
    category: Category
    flavor: String
    countOfUse: String
    brand: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
    hello: String
    getPods: [Pod]
    getPod(id: ID!): Pod
    getOilVape: [OilVape]
  }

  type Mutation {
    signup(email: String!, username: String!, password: String!): User
    login(email: String, username: String, password: String!): Token!
    createPod(
      name: String!
      category: String!
      flavor: String!
      countOfUse: String
      brand: String
    ): Pod
  }
`;
