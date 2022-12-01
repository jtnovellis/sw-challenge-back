const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Airline = sequelize.define('airlines', {
  IATA_CODE: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  AIRLINE: {
    type: DataTypes.STRING,
  },
});

module.exports = Airline;
