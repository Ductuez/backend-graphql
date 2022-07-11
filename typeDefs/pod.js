const Pod = `
  type Pod {
    id: ID!
    name: String
    category: Category
    flavor: String
    countOfUse: String
    brand: String
    madeIn: String
  }
  
  type OilVape {
    id: ID!
    name: String
    flavor: String
    brand: String
    ml: String
  }
  
  input  InputCreatePod {
      name: String!
      category: String!
      flavor: String!
      countOfUse: String
      brand: String
  }
`;

export default Pod;
