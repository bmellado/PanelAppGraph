const { gql } = require('apollo-server-core');
const { surveyTypeDefs, surveyResolvers } = require('./survey');
const { userSurveyTypeDefs, userSurveyResolvers } = require('./userSurvey');
const { appModuleTypeDefs, appModuleResolvers } = require('./appModule');
const { cycleTypeDefs, cycleResolvers } = require('./cycle');
const { panelTypeDefs, panelResolvers } = require('./panel');
const { panelTokenTypeDefs, panelTokenResolvers } = require('./panelToken');
const { tagTypeDefs, tagResolvers } = require('./tag');
const { userTypeDefs, userResolvers } = require('./user');

const typeDef = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [
    surveyTypeDefs,
    appModuleTypeDefs,
    cycleTypeDefs,
    panelTokenTypeDefs,
    panelTypeDefs,
    userSurveyTypeDefs,
    tagTypeDefs,
    userTypeDefs,
    typeDef,
  ],
  resolvers: [
    surveyResolvers,
    userSurveyResolvers,
    tagResolvers,
    panelResolvers,
    panelTokenResolvers,
    cycleResolvers,
    appModuleResolvers,
    userResolvers,
  ],
};
