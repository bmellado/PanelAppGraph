const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type Survey {
    id: ID!
    cycle: Cycle
    description: String!
    endDate: String!
    name: String!
    panel: Panel
    pointsAmount: Int!
    tags: [Tag]
    qualtricsName: String!
    qualtricsId: String!
    releaseDate: String!
  }

  extend type Mutation {
    editOrCreateSurvey(input: EditOrCreateSurveyInput!): Survey!
    deleteSurvey(surveyId: ID!): Boolean!
  }

  extend type Query {
    panelSurveys(panelId: ID!): [Survey]
    surveys: [Survey]
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
