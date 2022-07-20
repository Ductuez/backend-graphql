const Promotion = `
  type Promotion {
    id: ID!
    value: Int
    percent: Int
    from: String
    to: String
    active: Boolean
  }

  input InputCreatePromotion {
    value: Int
    percent: Int
    from: String
    to: String
    active: Boolean
  }
`;

export default Promotion;
