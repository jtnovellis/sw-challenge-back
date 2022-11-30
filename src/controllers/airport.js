const Airport = require('../models/airport');

async function getAirports(_, res) {
  try {
    const airport = await Airport.findAll();
    return res.status(200).json({ message: 'airports found', data: airport });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'airports could not been found', error: e });
  }
}

async function getOneAirport(req, res) {
  const { airportId } = req.params;
  try {
    const airport = await Airport.findOne({ where: { iataCode: airportId } });
    if (!airport) {
      throw new Error('Not found');
    }
    return res.status(200).json({ message: 'Airport found', data: airport });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airport could not been found', error: e });
  }
}

async function updateAirport(req, res) {
  const { airportId } = req.params;
  const data = req.body;
  try {
    const airport = await Airport.update(data, {
      where: { iataCode: airportId },
    });
    return res.status(200).json({ message: 'Airport updated', data: airport });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airport could not been updated', error: e });
  }
}
async function deleteAirport(req, res) {
  const { airportId } = req.params;
  try {
    const airport = await Airport.destroy({ where: { iataCode: airportId } });
    return res.status(200).json({ message: 'Airport deleted', data: airport });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airport could not been deleted', error: e });
  }
}

async function createAirport(req, res) {
  const data = req.body;
  try {
    const airport = await Airport.create(data);
    return res.status(201).json({ message: 'Airport created', data: airport });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Airport could not been created', error: e });
  }
}

module.exports = {
  createAirport,
  deleteAirport,
  getAirports,
  getOneAirport,
  updateAirport,
};
