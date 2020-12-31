const bcrypt = require('bcrypt');

const buildPasswordHash = async (instance) => {
  if (instance.changed('password')) {
    const hash = await bcrypt.hash(instance.password, 10);
    instance.set('password', hash);
  }
};

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
        notEmpty: { args: true, msg: "Email can't be empty" },
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: "Password can't be empty" },
        len: { args: [6], msg: 'Password must be at least 6 characters long' },
      },
    },
    paternalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  user.beforeUpdate(buildPasswordHash);
  user.beforeCreate(buildPasswordHash);

  user.prototype.checkPassword = function checkPassword(password) {
    return bcrypt.compare(password, this.password);
  };

  user.associate = (models) => {
    user.belongsToMany(models.AppModule, {
      through: 'ModuleModerators',
      as: 'modules',
    });
    user.belongsToMany(models.Panel, {
      through: 'PanelSurveyees',
      as: 'panels',
    });
    user.hasMany(models.UserSurvey, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
  };

  return user;
};

module.exports = { User };
