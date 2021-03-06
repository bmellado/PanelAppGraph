const { gql } = require('apollo-server-core');

const typeDefs = gql`
  type Survey {
    id: ID!
    cycle: Cycle
    description: String!
    expirationDate: String!
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
    createSurvey(
      cycle: ID
      description: String!
      expirationDate: String!
      name: String!
      panel: ID
      pointsAmount: Int!
      tags: [TagInput]
      qualtricsName: String!
      qualtricsId: String!
      releaseDate: String!
    ): Survey!
  }

  extend type Query {
    Survey(id: ID!): Survey
    panelSurveys(panelId: ID!): [Survey]
    allSurveys: [Survey]
  }

  input EditOrCreateSurveyInput {
    cycle: ID
    description: String!
    name: String!
    panel: ID
    pointsAmount: Int!
    tags: [TagInput]
    qualtricsName: String!
    qualtricsId: String!
  }

  input TagInput {
    id: ID!
  }
`;

module.exports = { typeDefs };
