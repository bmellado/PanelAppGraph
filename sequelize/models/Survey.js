const Survey = (sequelize, DataTypes) => {
  const survey = sequelize.define('Survey', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pointsAmount: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    qualtricsId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualtricsName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  // Associations
  survey.associate = (models) => {
    survey.belongsTo(models.Panel, {
      foreignKey: { allowNull: true },
      onDelete: 'CASCADE',
    });
    survey.belongsTo(models.Cycle, {
      foreignKey: { allowNull: true },
      onDelete: 'CASCADE',
    });
    survey.belongsToMany(models.Tag, {
      through: 'SurveyTags',
      as: 'tags',
    });
    survey.belongsToMany(models.User, {
      through: 'UserSurveys',
      as: 'userSurveys',
    });
  };

  return survey;
};

module.exports = { Survey };
