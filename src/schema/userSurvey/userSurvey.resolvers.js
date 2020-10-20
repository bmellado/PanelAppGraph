/* eslint-disable no-unused-vars */
const orm = require('../../../sequelize/models');

const resolvers = {
  UserSurvey: {},
  Mutation: {
    createUserSurvey: async (_parent, input, _arg) => {
      try {
        const userSurvey = orm.models.UserSurvey.create(input);
        return userSurvey;
      } catch (error) {
        return error;
      }
    },
    deleteUserSurvey: async (_parent, input, _arg) => {
      try {
        const { userSurveyId } = input;
        const userSurvey = orm.models.UserSurvey.destroy(userSurveyId);
        return userSurvey;
      } catch (error) {
        return error;
      }
    },
  },
  Query: {
    userSurveys: async (_parent, _args, _) => {
      try {
        const userSurveys = await orm.models.UserSurvey.findAll();
        return userSurveys;
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = { resolvers };
