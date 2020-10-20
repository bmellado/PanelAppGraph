const orm = require('../../../sequelize/models');

const resolvers = {
  Survey: {},
  Query: {
    // eslint-disable-next-line no-unused-vars
    allSurveys: async (_parent, _args, _) => {
      try {
        const surveys = await orm.Survey.findAll();
        return surveys;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    // eslint-disable-next-line no-unused-vars
    createSurvey: async (_parent, { input }, _) => {
      try {
        const survey = orm.Survey.build({ input });
        return survey;
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = { resolvers };
