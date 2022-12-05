const express = require('express');
const {
  getFlights,
  getOneFlight,
  createFlight,
  updateFlight,
  deleteFlight,
} = require('../controllers/flight');

const router = express.Router();

/**
 * @openapi
 * /flights:
 *   get:
 *     tags:
 *       - Flight
 *     summary: get all flight
 *     responses:
 *       200:
 *         description: An array of all the flight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getFlights);

/**
 * @openapi
 * /flights:
 *   post:
 *     tags:
 *       - Flight
 *     summary: Create an Flight
 *     requestBody:
 *       description: Flight data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flight'
 *     responses:
 *       201:
 *         description: Flight created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', createFlight);

/**
 * @openapi
 * /flights/{flightId}:
 *   get:
 *     tags:
 *       - Flight
 *     description: find an Flight
 *     parameters:
 *       - name: flightId
 *         in: path
 *         description: Flight id
 *         required: true
 *     responses:
 *       200:
 *         description: An Flight
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       '400':
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:flightId', getOneFlight);

/**
 * @openapi
 * /flights/{flightId}:
 *   patch:
 *     tags:
 *       - Flight
 *     summary: Update an Flight
 *     parameters:
 *       - name: flightId
 *         in: path
 *         description: Flight id
 *         required: true
 *     requestBody:
 *       description: Flight data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flight'
 *     responses:
 *       200:
 *         description: Flight updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:flightId', updateFlight);

/**
 * @openapi
 * /flights/{flightId}:
 *   delete:
 *     tags:
 *       - Flight
 *     summary: Delete an Flight
 *     parameters:
 *       - name: flightId
 *         in: path
 *         description: Flight id
 *         required: true
 *     responses:
 *       200:
 *         description: Flight deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.delete('/:flightId', deleteFlight);

module.exports = router;
