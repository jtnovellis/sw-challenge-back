const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Airline = sequelize.define('airlines', {
  IATA_CODE: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  AIRLINE: {
    type: DataTypes.STRING,
  },
});

module.exports = Airline;
