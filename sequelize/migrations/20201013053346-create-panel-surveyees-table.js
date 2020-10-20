'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PanelSurveyees', {
      panelId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Panel',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PanelSurveyees');
  },
};
