const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Flight = sequelize.define('flights', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  YEAR: {
    type: DataTypes.INTEGER,
  },
  MONTH: {
    type: DataTypes.INTEGER,
  },
  DAY: {
    type: DataTypes.INTEGER,
  },
  DAY_OF_WEEK: {
    type: DataTypes.INTEGER,
  },
  AIRLINE: {
    type: DataTypes.STRING,
  },
  FLIGHT_NUMBER: {
    type: DataTypes.INTEGER,
  },
  TAIL_NUMBER: {
    type: DataTypes.STRING,
  },
  ORIGIN_AIRPORT: {
    type: DataTypes.STRING,
  },
  DESTINATION_AIRPORT: {
    type: DataTypes.STRING,
  },
  SCHEDULED_DEPARTURE: {
    type: DataTypes.INTEGER,
  },
  DEPARTURE_TIME: {
    type: DataTypes.INTEGER,
  },
  DEPARTURE_DELAY: {
    type: DataTypes.INTEGER,
  },
  TAXI_OUT: {
    type: DataTypes.INTEGER,
  },
  WHEELS_OFF: {
    type: DataTypes.INTEGER,
  },
  SCHEDULED_TIME: {
    type: DataTypes.INTEGER,
  },
  ELAPSED_TIME: {
    type: DataTypes.INTEGER,
  },
  AIR_TIME: {
    type: DataTypes.INTEGER,
  },
  DISTANCE: {
    type: DataTypes.INTEGER,
  },
  WHEELS_ON: {
    type: DataTypes.INTEGER,
  },
  TAXI_IN: {
    type: DataTypes.INTEGER,
  },
  SCHEDULED_ARRIVAL: {
    type: DataTypes.INTEGER,
  },
  ARRIVAL_TIME: {
    type: DataTypes.INTEGER,
  },
  ARRIVAL_DELAY: {
    type: DataTypes.INTEGER,
  },
  DIVERTED: {
    type: DataTypes.INTEGER,
  },
  CANCELLED: {
    type: DataTypes.INTEGER,
  },
  CANCELATION_REASON: {
    type: DataTypes.INTEGER,
  },
  AIR_SYSTEM_DELAY: {
    type: DataTypes.INTEGER,
  },
  SECURITY_DELAY: {
    type: DataTypes.INTEGER,
  },
  AIRLINE_DELAY: {
    type: DataTypes.INTEGER,
  },
  LATE_AIRCRAFT_DELAY: {
    type: DataTypes.INTEGER,
  },
  WEATHER_DELAY: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Flight;
