const { resolvers } = require('./user.resolvers');
const { typeDefs } = require('./user.typeDefs');

module.exports = {
  userResolvers: resolvers,
  userTypeDefs: typeDefs,
};
