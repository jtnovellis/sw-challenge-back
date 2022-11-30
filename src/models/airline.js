const { DataTypes } = require('sequelize');
const { sequelize } = require('../databse');

const Airline = sequelize.define('airlines', {
  iataCode: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  airline: {
    type: DataTypes.STRING,
  },
});

module.exports = Airline;