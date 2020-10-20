const PanelToken = (sequelize, DataTypes) => {
  const panelToken = sequelize.define('PanelToken', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    panelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Panel',
        },
        key: 'id',
      },
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  panelToken.associate = (models) => {
    panelToken.belongsTo(models.Panel, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
  };

  return panelToken;
};

module.exports = { PanelToken };
