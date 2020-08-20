const { resolvers } = require('./admin.resolvers');
const { typeDefs } = require('./admin.typeDefs');

module.exports = {
  adminResolvers: resolvers,
  adminTypeDefs: typeDefs,
};
