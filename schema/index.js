const { gql } = require('apollo-server-core');
const { adminTypeDefs, adminResolvers } = require('./admin');
const { surveyTypeDefs, surveyResolvers } = require('./survey');

const typeDef = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [adminTypeDefs, surveyTypeDefs, typeDef],
  resolvers: [adminResolvers, surveyResolvers],
};
