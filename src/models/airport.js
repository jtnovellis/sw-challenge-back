const { DataTypes } = require('sequelize');
const { sequelize } = require('../databse');

const Airport = sequelize.define('airport', {
  iataCode: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  airport: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.FLOAT,
  },
  longitude: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Airport;
