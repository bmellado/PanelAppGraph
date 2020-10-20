const { resolvers } = require('./appModule.resolvers');
const { typeDefs } = require('./appModule.typeDefs');

module.exports = {
  appModuleResolvers: resolvers,
  appModuleTypeDefs: typeDefs,
};
