const AppModule = (sequelize, DataTypes) => {
  const appModule = sequelize.define('AppModule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  appModule.associate = (models) => {
    appModule.hasMany(models.Panel, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
    appModule.belongsToMany(models.User, {
      through: 'ModuleModerators',
      as: 'moderators',
    });
  };

  return appModule;
};

module.exports = { AppModule };
