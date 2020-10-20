const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type PanelToken {
    id: ID!
    email: String!
    panel: Panel!
    status: String!
    token: String!
  }
`;

module.exports = { typeDefs };
