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

/**
 * @openapi
 * /airports:
 *   get:
 *     tags:
 *       - Airport
 *     summary: get all airports
 *     responses:
 *       200:
 *         description: An array of airports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getAirports);

/**
 * @openapi
 * /airports:
 *   post:
 *     tags:
 *       - Airport
 *     summary: Create an airport
 *     requestBody:
 *       description: Airport data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Airport'
 *     responses:
 *       201:
 *         description: Airport created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', createAirport);

/**
 * @openapi
 * /airports/{airportId}:
 *   get:
 *     tags:
 *       - Airport
 *     summary: find an airport
 *     parameters:
 *       - name: airportId
 *         in: path
 *         description: airport id
 *         required: true
 *     responses:
 *       200:
 *         description: An airport
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       '400':
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:airportId', getOneAirport);

/**
 * @openapi
 * /airports/{airportId}:
 *   put:
 *     tags:
 *       - Airport
 *     summary: Update an airport
 *     parameters:
 *       - name: airportId
 *         in: path
 *         description: airport id
 *         required: true
 *     requestBody:
 *       description: Airport data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Airport'
 *     responses:
 *       200:
 *         description: Airport updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:airportId', updateAirport);

/**
 * @openapi
 * /airports/{airportId}:
 *   delete:
 *     tags:
 *       - Airport
 *     summary: Delete an airport
 *     parameters:
 *       - name: airportId
 *         in: path
 *         description: airport id
 *         required: true
 *     responses:
 *       200:
 *         description: Airport deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:airportId', deleteAirport);
router.post('/massive', createMassiveAirport);

module.exports = router;
