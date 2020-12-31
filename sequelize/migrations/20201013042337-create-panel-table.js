module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Panel', {
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Panel');
  },
};
