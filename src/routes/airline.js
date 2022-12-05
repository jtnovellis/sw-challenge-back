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

/**
 * @openapi
 * /airlines:
 *   get:
 *     tags:
 *       - Airline
 *     summary: get all airlines
 *     responses:
 *       200:
 *         description: An array of airlines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Airline'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getAirlines);

/**
 * @openapi
 * /airlines:
 *   post:
 *     tags:
 *       - Airline
 *     summary: Create an airline
 *     requestBody:
 *       description: Airline data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Airline'
 *     responses:
 *       201:
 *         description: Airline created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airline'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', createAirline);

/**
 * @openapi
 * /airlines/{airlineId}:
 *   get:
 *     tags:
 *       - Airline
 *     summary: find an airline
 *     parameters:
 *       - name: airlineId
 *         in: path
 *         description: airline id
 *         required: true
 *     responses:
 *       200:
 *         description: An airline
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airline'
 *       '400':
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:airlineId', getOneAirline);

/**
 * @openapi
 * /airlines/{airlineId}:
 *   put:
 *     tags:
 *       - Airline
 *     summary: Update an airline
 *     parameters:
 *       - name: airlineId
 *         in: path
 *         description: airline id
 *         required: true
 *     requestBody:
 *       description: Airline data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Airline'
 *     responses:
 *       200:
 *         description: Airline updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airline'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:airlineId', updateAirline);

/**
 * @openapi
 * /airlines/{airlineId}:
 *   delete:
 *     tags:
 *       - Airline
 *     summary: Delete an airline
 *     parameters:
 *       - name: airlineId
 *         in: path
 *         description: airline id
 *         required: true
 *     responses:
 *       200:
 *         description: Airline deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airline'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:airlineId', deleteAirline);
router.post('/massive', createMassiveAirline);

module.exports = router;
