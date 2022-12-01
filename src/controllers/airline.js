const Airline = require('../models/airline');
const { data } = require('../../dataJson/airlines');

async function getAirlines(_, res) {
  try {
    const airlines = await Airline.findAll();
    return res.status(200).json({ message: 'Airlines found', data: airlines });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airlines could not been found', error: e });
  }
}

async function getOneAirline(req, res) {
  const { airlineId } = req.params;
  try {
    const airline = await Airline.findOne({ where: { iataCode: airlineId } });
    if (!airline) {
      throw new Error('Not found');
    }
    return res.status(200).json({ message: 'Airline found', data: airline });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airline could not been found', error: e });
  }
}

async function updateAirline(req, res) {
  const { airlineId } = req.params;
  const data = req.body;
  try {
    const airline = await Airline.update(data, {
      where: { iataCode: airlineId },
    });
    return res.status(200).json({ message: 'Airline updated', data: airline });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airline could not been updated', error: e });
  }
}
async function deleteAirline(req, res) {
  const { airlineId } = req.params;
  try {
    const airline = await Airline.destroy({ where: { iataCode: airlineId } });
    return res.status(200).json({ message: 'Airline deleted', data: airline });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airline could not been deleted', error: e });
  }
}

async function createAirline(req, res) {
  const data = req.body;
  try {
    const airline = await Airline.create(data);
    return res.status(201).json({ message: 'Airline created', data: airline });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airline could not been created', error: e });
  }
}

async function createMassiveAirline(req, res) {
  try {
    const newAirlines = [];
    for (let i = 0; i < data.length; i++) {
      const airline = await Airline.create(data[i]);
      newAirlines.push(airline);
    }
    return res
      .status(201)
      .json({ message: 'Airline created', data: newAirlines });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airline could not been created', error: e });
  }
}

module.exports = {
  createAirline,
  deleteAirline,
  updateAirline,
  getAirlines,
  getOneAirline,
  createMassiveAirline,
};
