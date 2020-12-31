const Panel = (sequelize, DataTypes) => {
  const panel = sequelize.define('Panel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  panel.associate = (models) => {
    panel.hasMany(models.Cycle, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
    panel.hasMany(models.Survey, {
      foreignKey: { allowNull: true },
      onDelete: 'CASCADE',
    });
    panel.belongsTo(models.Module, {
      onDelete: 'CASCADE',
    });
    panel.belongsToMany(models.User, {
      through: 'PanelSurveyees',
      as: 'surveyees',
    });
  };

  return panel;
};

module.exports = { Panel };
