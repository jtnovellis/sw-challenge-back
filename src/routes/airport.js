const express = require('express');
const {
  createAirport,
  deleteAirport,
  getAirports,
  getOneAirport,
  updateAirport,
} = require('../controllers/airport');

const router = express.Router();

router.post('/', createAirport);
router.get('/', getAirports);
router.get('/:airportId', getOneAirport);
router.put('/:airportId', updateAirport);
router.delete('/:airportId', deleteAirport);

module.exports = router;
