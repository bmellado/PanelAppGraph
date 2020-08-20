const { gql } = require('apollo-server-core');

const typeDefs = gql`
  "Basic admin (surveyor) model"
  type Admin {
    id: ID!
    firstName: String!
    institution: String!
    lastName: String!
  }
`;

module.exports = { typeDefs };
