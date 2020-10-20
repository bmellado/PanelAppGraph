'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CycleTags', {
      cycleId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Cycle',
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
    await queryInterface.dropTable('CycleTags');
  },
};
