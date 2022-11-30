const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Flight = sequelize.define('flights', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  month: {
    type: DataTypes.INTEGER,
  },
  day: {
    type: DataTypes.INTEGER,
  },
  dayOfWeek: {
    type: DataTypes.INTEGER,
  },
  airline: {
    type: DataTypes.STRING,
  },
  flightNumber: {
    type: DataTypes.INTEGER,
  },
  tailNumber: {
    type: DataTypes.STRING,
  },
  originAirport: {
    type: DataTypes.STRING,
  },
  destinationAirport: {
    type: DataTypes.STRING,
  },
  scheduledDeparture: {
    type: DataTypes.INTEGER,
  },
  departureTime: {
    type: DataTypes.INTEGER,
  },
  departureDelay: {
    type: DataTypes.INTEGER,
  },
  taxiOut: {
    type: DataTypes.INTEGER,
  },
  wheelsOff: {
    type: DataTypes.INTEGER,
  },
  scheduledTime: {
    type: DataTypes.INTEGER,
  },
  elapsedTime: {
    type: DataTypes.INTEGER,
  },
  airTime: {
    type: DataTypes.INTEGER,
  },
  distance: {
    type: DataTypes.INTEGER,
  },
  wheelsOn: {
    type: DataTypes.INTEGER,
  },
  taxiIn: {
    type: DataTypes.INTEGER,
  },
  scheduledArrival: {
    type: DataTypes.INTEGER,
  },
  arrivalTime: {
    type: DataTypes.INTEGER,
  },
  arrivalDelay: {
    type: DataTypes.INTEGER,
  },
  diverted: {
    type: DataTypes.INTEGER,
  },
  cancelled: {
    type: DataTypes.INTEGER,
  },
  cancellationReason: {
    type: DataTypes.INTEGER,
  },
  airSystemDelay: {
    type: DataTypes.INTEGER,
  },
  securityDelay: {
    type: DataTypes.INTEGER,
  },
  airlineDelay: {
    type: DataTypes.INTEGER,
  },
  lateAircraftDelay: {
    type: DataTypes.INTEGER,
  },
  weatherDelay: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Flight;
