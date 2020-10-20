const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type User {
    id: ID!
    birthDate: String!
    email: String!
    firstName: String!
    isSuperUser: Boolean!
    moderatedPanels: [Panel]
    surveyeePanels: [Panel]
    password: String!
    paternalName: String!
  }
`;

module.exports = { typeDefs };
