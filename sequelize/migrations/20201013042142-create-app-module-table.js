module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AppModule', {
      institution: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AppModule');
  },
};
