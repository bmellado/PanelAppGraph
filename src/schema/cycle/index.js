const { resolvers } = require('./cycle.resolvers');
const { typeDefs } = require('./cycle.typeDefs');

module.exports = {
  cycleResolvers: resolvers,
  cycleTypeDefs: typeDefs,
};
