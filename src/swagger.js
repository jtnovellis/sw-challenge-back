const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const { version } = require('../package.json');
const routes = path.join(__dirname, './routes/*.js');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Technical Challenge',
      version,
      description:
        'Challenge to validate my ability as a Backend Software Engineer with Wannabe',
      contact: {
        name: 'Jairo Jair Toro Novellis',
        email: 'jtnovellis88@gmail.com',
      },
    },
    components: {
      schemas: {
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
            e: {
              type: 'object',
            },
          },
        },
        Airline: {
          type: 'object',
          properties: {
            IATA_CODE: {
              type: 'string',
              description: 'unique code for an airline',
              example: 'AA',
            },
            AIRLINE: {
              type: 'string',
              description: 'airline name',
              example: 'American Airlines Inc.',
            },
          },
        },
        Airport: {
          type: 'object',
          properties: {
            IATA_CODE: {
              type: 'string',
            },
            AIRPORT: {
              type: 'string',
            },
            CITY: {
              type: 'string',
            },
            STATE: {
              type: 'string',
            },
            COUNTRY: {
              type: 'string',
            },
            LATITUDE: {
              type: 'string',
            },
            LONGITUDE: {
              type: 'string',
            },
          },
        },
        Flight: {
          type: 'object',
          properties: {
            ID: {
              type: 'integer',
            },
            YEAR: {
              type: 'integer',
            },
            MONTH: {
              type: 'integer',
            },
            DAY: {
              type: 'integer',
            },
            DAY_OF_WEEK: {
              type: 'integer',
            },
            AIRLINE: {
              type: 'string',
            },
            FLIGHT_NUMBER: {
              type: 'integer',
            },
            TAIL_NUMBER: {
              type: 'string',
            },
            ORIGIN_AIRPORT: {
              type: 'string',
            },
            DESTINATION_AIRPORT: {
              type: 'string',
            },
            SCHEDULED_DEPARTURE: {
              type: 'integer',
            },
            DEPARTURE_TIME: {
              type: 'integer',
            },
            DEPARTURE_DELAY: {
              type: 'integer',
            },
            TAXI_OUT: {
              type: 'integer',
            },
            WHEELS_OFF: {
              type: 'integer',
            },
            SCHEDULED_TIME: {
              type: 'integer',
            },
            ELAPSED_TIME: {
              type: 'integer',
            },
            AIR_TIME: {
              type: 'integer',
            },
            DISTANCE: {
              type: 'integer',
            },
            WHEELS_ON: {
              type: 'integer',
            },
            TAXI_IN: {
              type: 'integer',
            },
            SCHEDULED_ARRIVAL: {
              type: 'integer',
            },
            ARRIVAL_TIME: {
              type: 'integer',
            },
            ARRIVAL_DELAY: {
              type: 'integer',
            },
            DIVERTED: {
              type: 'integer',
            },
            CANCELLED: {
              type: 'integer',
            },
            CANCELATION_REASON: {
              type: 'integer',
            },
            AIR_SYSTEM_DELAY: {
              type: 'integer',
            },
            SECURITY_DELAY: {
              type: 'integer',
            },
            AIRLINE_DELAY: {
              type: 'integer',
            },
            LATE_AIRCRAFT_DELAY: {
              type: 'integer',
            },
            WEATHER_DELAY: {
              type: 'integer',
            },
          },
        },
      },
    },
  },
  apis: [routes],
};

const swaggerSpecs = swaggerJsDoc(options);

function swaggerDoc(app, port) {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
  console.log(`Swagger running on http://localhost:${port}/docs`);
}

module.exports = { swaggerDoc };
