/* eslint-disable no-unused-vars */
const orm = require('../../../sequelize/models');
const { hashPassword } = require('../../helpers/utils');

const resolvers = {
  User: {},
  Query: {},
  Mutation: {
    editOrCreateUser: async (_parent, { input }, _arg) => {
      try {
        const user = await orm.models.User.create(input);
        return user;
      } catch (error) {
        return error;
      }
    },
    addPanelToSurveyee: async (_parent, input, _arg) => {
      try {
        const { panelId, userId } = input;
        const panel = orm.models.Panel.findByPk(panelId);
        const user = orm.models.User.findByPk(userId);
        user.addPanel(panel);
        return user;
      } catch (error) {
        return error;
      }
    },
    addModuleToModerator: async (_parent, input, _arg) => {
      try {
        const { moduleId, userId } = input;
        const module = orm.models.AppModule.findByPk(moduleId);
        const user = orm.models.User.findByPk(userId);
        user.addModule(module);
        return user;
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = { resolvers };
