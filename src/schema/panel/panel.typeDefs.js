const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type Panel {
    id: ID!
    description: String!
    name: String!
  }

  extend type Mutation {
    editOrCreatePanel(input: EditOrCreatePanelInput!): Panel!
    deletePanel(panelId: ID!): Boolean!
  }

  extend type Query {
    modulePanels(moduleId: ID!): [Panel]
  }

  input EditOrCreatePanelInput {
    module: ID
    description: String!
    name: String!
    surveyees: [User]
  }
`;

module.exports = { typeDefs };
