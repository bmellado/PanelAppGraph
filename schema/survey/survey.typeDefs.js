const { gql } = require('apollo-server-core');

const typeDefs = gql`
  "Basic survey model"
  type Survey {
    id: ID!
    admin: Admin!
    description: String!
    expirationDate: String!
    name: String!
    qualtricsLink: String!
    releaseDate: String!
  }

  extend type Mutation {
    createSurvey(input: CreateSurveyInput!): Survey!
    editSurvey(input: EditSurveyInput!): Survey!
    deleteSurvey(input: DeleteSurveyInput!): Boolean!
  }

  input CreateSurveyInput {
    adminId: ID!
    description: String!
    expirationDate: String!
    name: String!
    qualtricsLink: String!
    releaseDate: String!
  }

  input EditSurveyInput {
    description: String!
    expirationDate: String!
    name: String!
    releaseDate: String!
    surveyId: String!
  }

  input DeleteSurveyInput {
    surveyId: String!
  }
`;

module.exports = { typeDefs };
