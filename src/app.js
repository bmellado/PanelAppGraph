const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { resolvers, typeDefs } = require('./schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  playground: true,
  schema,
});

const app = express();
server.applyMiddleware({ app, path: '/graphql' });

app.use(express.json());

module.exports = app;
