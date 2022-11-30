const flight = require('./routes/flight');
const airport = require('./routes/airport');
const airline = require('./routes/airline');

function routesConfig(app) {
  app.use('/api/flights', flight);
  app.use('/api/airports', airport);
  app.use('/api/airlines', airline);
}

module.exports = { routesConfig };
