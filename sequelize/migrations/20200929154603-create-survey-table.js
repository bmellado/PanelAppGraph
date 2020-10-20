module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Survey', {
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      expirationDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      pointsAmount: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
      },
      qualtricsId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      releaseDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Survey');
  },
};
