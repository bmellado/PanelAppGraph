const { ApolloServer } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const { makeExecutableSchema } = require('graphql-tools');
const { resolvers, typeDefs } = require('../schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const mutateConstructor = (user) => {
  const server = new ApolloServer({
    schema,
    typeDefs,
    resolvers,
    context: () => ({ user }),
  });
  const { mutate } = createTestClient(server);
  return mutate;
};

const queryConstructor = (user) => {
  const server = new ApolloServer({
    schema,
    typeDefs,
    resolvers,
    context: () => ({ user }),
  });
  const { query } = createTestClient(server);
  return query;
};

module.exports = { mutateConstructor, queryConstructor };
