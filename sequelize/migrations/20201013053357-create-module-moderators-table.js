'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ModuleModerators', {
      moduleId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'AppModule',
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
    await queryInterface.dropTable('ModuleModerators');
  },
};
