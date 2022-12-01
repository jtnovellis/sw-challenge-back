const express = require('express');
const {
  getFlights,
  getOneFlight,
  createFlight,
  updateFlight,
  deleteFlight,
} = require('../controllers/flight');

const router = express.Router();

router.post('/', createFlight);
router.get('/', getFlights);
router.get('/:flightId', getOneFlight);
router.put('/:flightId', updateFlight);
router.delete('/:flightId', deleteFlight);

module.exports = router;
