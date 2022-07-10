const User = `
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
  }
  type Token {
    jwt: ID!
  }
`;

export default User;
