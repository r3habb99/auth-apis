const { Sequelize } = require('sequelize');
const dbConfig = require('../constants/db.constants');
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const config = dbConfig[environment];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
  }
);

module.exports = sequelize;
