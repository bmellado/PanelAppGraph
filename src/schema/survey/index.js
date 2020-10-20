const { resolvers } = require('./survey.resolvers');
const { typeDefs } = require('./survey.typeDefs');

module.exports = {
  surveyResolvers: resolvers,
  surveyTypeDefs: typeDefs,
};
