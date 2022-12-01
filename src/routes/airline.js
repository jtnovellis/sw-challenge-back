const express = require('express');
const {
  createAirline,
  deleteAirline,
  updateAirline,
  getAirlines,
  getOneAirline,
  createMassiveAirline,
} = require('../controllers/airline');

const router = express.Router();

router.post('/', createAirline);
router.get('/', getAirlines);
router.post('/massive', createMassiveAirline);
router.get('/:airlineId', getOneAirline);
router.put('/:airlineId', updateAirline);
router.delete('/:airlineId', deleteAirline);

module.exports = router;
