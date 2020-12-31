const { Sequelize, DataTypes } = require('sequelize');
const { AppModule } = require('./AppModule');
const { Cycle } = require('./Cycle');
const { Panel } = require('./Panel');
const { Survey } = require('./Survey');
const { Tag } = require('./Tag');
const { User } = require('./User');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'mysql',
  host: config.host,
});

const modelDefiners = [AppModule, Cycle, Panel, Survey, Tag, User];

modelDefiners.forEach((sequelizeModel) => {
  sequelizeModel(sequelize, DataTypes);
});

module.exports = sequelize;
