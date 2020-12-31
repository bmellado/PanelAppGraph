const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type AppModule {
    id: ID!
    institution: String
    name: String!
  }

  extend type Mutation {
    editOrCreateAppModule(input: EditOrCreateAppModuleInput!): AppModule!
    deleteAppModule(appModuleId: ID!): Boolean!
  }

  extend type Query {
    appModule(appModule: ID!): AppModule!
    appModules: [AppModule]
  }

  input EditOrCreateAppModuleInput {
    institution: String
    name: String!
  }
`;

module.exports = { typeDefs };
