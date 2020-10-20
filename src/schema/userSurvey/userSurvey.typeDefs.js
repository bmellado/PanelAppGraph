const { gql } = require('apollo-server-core');

const typeDefs = gql`
  "Basic user survey model"
  type UserSurvey {
    id: ID!
    privateLink: String!
    status: String!
    survey: Survey!
    user: User!
  }

  extend type Mutation {
    createUserSurvey(input: CreateUserSurveyInput!): UserSurvey!
    deleteUserSurvey(userSurveyId: ID!): Boolean!
  }

  extend type Query {
    userSurveys(userId: ID!): [UserSurvey]
  }

  input CreateUserSurveyInput {
    privateLink: String!
    status: String!
    survey: ID!
    user: ID!
  }
`;

module.exports = { typeDefs };
