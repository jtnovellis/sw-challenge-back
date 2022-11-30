const Sequelize = require('sequelize');

const postgresUri = process.env.POSTGRES_DB_URI;

const sequelize = new Sequelize(postgresUri);

module.exports = { sequelize };
