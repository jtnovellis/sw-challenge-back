const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Airport = sequelize.define('airport', {
  IATA_CODE: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  AIRPORT: {
    type: DataTypes.STRING,
  },
  CITY: {
    type: DataTypes.STRING,
  },
  STATE: {
    type: DataTypes.STRING,
  },
  COUNTRY: {
    type: DataTypes.STRING,
  },
  LATITUDE: {
    type: DataTypes.FLOAT,
  },
  LONGITUDE: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Airport;
