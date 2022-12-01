const express = require('express');
const {
  createAirport,
  deleteAirport,
  getAirports,
  getOneAirport,
  updateAirport,
  createMassiveAirport,
} = require('../controllers/airport');

const router = express.Router();

router.post('/', createAirport);
router.post('/massive', createMassiveAirport);
router.get('/', getAirports);
router.get('/:airportId', getOneAirport);
router.put('/:airportId', updateAirport);
router.delete('/:airportId', deleteAirport);

module.exports = router;
