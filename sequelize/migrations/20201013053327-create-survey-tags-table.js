'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SurveyTags', {
      surveyId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Survey',
          key: 'id',
        },
      },
      tagId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Tag',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SurveyTags');
  },
};
