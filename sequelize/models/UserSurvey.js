const UserSurvey = (sequelize, DataTypes) => {
  const userSurvey = sequelize.define('UserSurvey', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'Pending',
    },
    linkExpirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  userSurvey.associate = (models) => {
    userSurvey.belongsTo(models.User, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
    userSurvey.belongsTo(models.Survey, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
  };

  return userSurvey;
};

module.exports = { UserSurvey };
