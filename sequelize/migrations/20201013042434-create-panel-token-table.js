module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PanelToken', {
      panelId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Panel',
          },
          key: 'id',
        },
      },
      userEmail: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      token: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PanelToken');
  },
};
