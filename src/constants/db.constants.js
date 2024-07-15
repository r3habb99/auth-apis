'use strict';
require('dotenv').config();
/*
|--------------------------------------------------------------------------
| DATABASE
|--------------------------------------------------------------------------
*/
const dbConfig = {
  local: {
    host: process.env.PGHOST,
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    dialect: process.env.DIALECT,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  development: {
    host: process.env.PGHOST,
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    dialect: process.env.DIALECT,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  dev: {
    host: process.env.PGHOST,
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    dialect: process.env.DIALECT,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
module.exports = dbConfig;
