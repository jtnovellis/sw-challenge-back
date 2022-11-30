const Flight = require('../models/flight');

async function getFlights(_, res) {
  try {
    const flights = await Flight.findAll();
    return res.status(200).json({ message: 'Flights found', data: flights });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Flights could not been found', error: e });
  }
}

async function getOneFlight(req, res) {
  const { flightId } = req.params;
  try {
    const flight = await Flight.findByPk(flightId);
    return res.status(200).json({ message: 'Flight found', data: flight });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Flight could not been found', error: e });
  }
}

async function updateFlight(req, res) {
  const { flightId } = req.params;
  const data = req.body;
  try {
    const flight = await Flight.update(data, { where: { id: flightId } });
    return res.status(200).json({ message: 'Flight updated', data: flight });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Flight could not been updated', error: e });
  }
}
async function deleteFlight(req, res) {
  const { flightId } = req.params;
  try {
    const flight = await Flight.destroy({ where: { id: flightId } });
    return res.status(200).json({ message: 'Flight deleted', data: flight });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Flight could not been deleted', error: e });
  }
}

async function createFlight(req, res) {
  const data = req.body;
  try {
    const flight = await Flight.create(data);
    return res.status(201).json({ message: 'Flight created', data: flight });
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Flight could not been created', error: e });
  }
}

module.exports = {
  getFlights,
  getOneFlight,
  createFlight,
  updateFlight,
  deleteFlight,
};
