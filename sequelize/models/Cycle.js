const Cycle = (sequelize, DataTypes) => {
  const cycle = sequelize.define('Cycle', {
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
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  cycle.associate = (models) => {
    cycle.belongsTo(models.Panel, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
    cycle.belongsToMany(models.Tag, {
      through: 'CycleTags',
      as: 'tags',
    });
    cycle.hasMany(models.Survey, {
      foreignKey: { allowNull: true },
      onDelete: 'CASCADE',
    });
  };
  return cycle;
};

module.exports = { Cycle };
