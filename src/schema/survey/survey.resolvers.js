const orm = require('../../../sequelize/models');

const resolvers = {
  Survey: {},
  Query: {
    // eslint-disable-next-line no-unused-vars
    surveys: async (_parent, _args, _) => {
      try {
        const surveys = await orm.Survey.findAll();
        return surveys;
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = { resolvers };
