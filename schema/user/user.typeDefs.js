const { gql } = require('apollo-server-core');

const typeDefs = gql`
  "Basic user model"
  type User {
    id: ID!
    birthDate: String!
    city: String!
    country: String!
    email: String!
    firstName: String!
    maternalLastName: String
    middleName: String
    monthlyIncome: String
    paternalLastName: String!
    region: String!
  }

  type Query {
    _dummy: String
  }
`;

module.exports = { typeDefs };
