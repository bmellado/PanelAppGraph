const Tag = (sequelize, DataTypes) => {
  const tag = sequelize.define('Tag', {
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

  tag.associate = (models) => {
    tag.belongsToMany(models.Survey, {
      through: 'SurveyTags',
      as: 'surveys',
    });
    tag.belongsToMany(models.Cycle, {
      through: 'CycleTags',
      as: 'cycles',
    });
  };

  return tag;
};

module.exports = { Tag };
