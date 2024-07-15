const Sequelize = require('sequelize');
const sequelize = require('../config/database.config');

const User = require('./user.model')(sequelize, Sequelize);
const Token = require('./token.model')(sequelize, Sequelize);

User.hasMany(Token, { onDelete: 'CASCADE' });
Token.belongsTo(User, { foreignKey: 'userId' });

const db = {
  sequelize,
  Sequelize,
  User,
  Token,
};

module.exports = db;
