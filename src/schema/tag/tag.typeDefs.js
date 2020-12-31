const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type Tag {
    id: ID!
    description: String!
    name: String!
  }
`;

module.exports = { typeDefs };
