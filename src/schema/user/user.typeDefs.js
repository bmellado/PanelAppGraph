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

  extend type Mutation {
    editOrCreateUser(input: EditOrCreateUserInput!): User!
    deleteUser(userId: ID!): Boolean!
    addPanelToSurveyee(userId: ID!, panelId: ID!): User!
    addModuleToModerator(userId: ID!, moduleId: ID!): User!
  }

  extend type Query {
    getUser(userId: ID!): User!
    allUsers: [User]
    panelSurveyees(panelId: ID!): [User]
    moduleModerators(moduleId: ID!): [User]
  }

  input EditOrCreateUserInput {
    birthDate: String!
    email: String!
    firstName: String!
    isSuperUser: Boolean!
    password: String!
    paternalName: String!
  }

  input UserPanelInput {
    id: ID!
  }
`;

module.exports = { typeDefs };
