const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type Cycle {
    id: ID!
    description: String!
    endDate: String!
    name: String!
    panel: Panel!
    releaseDate: String!
    surveys: [Survey]
    tags: [Tag]
  }

  extend type Mutation {
    addSurveysToCycle(input: AddSurveysToCycleInput!): Cycle!
    editOrCreateCycle(input: EditOrCreateCycleInput!): Cycle!
    deleteCycle(cycleId: ID!): Boolean!
  }

  extend type Query {
    panelCycles(panelId: ID!): [Cycle]
  }

  input EditOrCreateCycleInput {
    id: ID!
    description: String!
    endDate: String!
    name: String!
    panel: CyclePanelInput!
    releaseDate: String!
    tags: [CycleTagInput]
  }

  input CycleTagInput {
    id: ID!
  }

  input CyclePanelInput {
    id: ID!
  }

  input AddSurveysToCycleInput {
    surveys: [SurveyInput]
  }

  input SurveyInput {
    id: ID!
  }
`;

module.exports = { typeDefs };
