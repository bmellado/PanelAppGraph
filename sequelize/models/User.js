const hash = require('bcrypt');

const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validation: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSuperuser: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      set(value) {
        const hashPwd = hash(value, 10, (err, hashed) => {
          if (err) throw err;
          return hashed;
        });
        this.setDataValue('password', hashPwd);
      },
    },
    paternalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  user.associate = (models) => {
    user.belongsToMany(models.AppModule, {
      through: 'ModuleModerators',
      as: 'modules',
    });
    user.belongsToMany(models.Panel, {
      through: 'PanelSurveyees',
      as: 'panels',
    });
    user.belongsToMany(models.Survey, {
      through: 'UserSurveys',
      as: 'surveyees',
    });
  };

  return user;
};

module.exports = { User };
