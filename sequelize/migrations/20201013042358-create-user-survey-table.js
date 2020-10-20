module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserSurvey', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'User',
          },
          key: 'id',
        },
      },
      surveyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Survey',
          },
          key: 'id',
        },
      },
      qualtricsLink: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkExpirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserSurvey');
  },
};
