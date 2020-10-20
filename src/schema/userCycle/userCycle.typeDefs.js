const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type UserCycle {
    id: ID!
    cycle: ID!
    user: ID!
  }

  extend type Mutation {
    editOrCreateUserCycle(input: EditOrCreateUserCycleInput!): UserCycle!
    deleteSurvey(surveyId: ID!): Boolean!
  }

  extend type Query {
    userCycles(panelId: ID!): [UserCycle]
  }

  input EditOrCreateSurveyInput {
    cycle: ID
    description: String!
    name: String!
    panel: ID
    pointsAmount: Int!
    tags: [Tag]
    qualtricsName: String!
    qualtricsId: String!
  }
`;

module.exports = { typeDefs };
