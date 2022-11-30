const flight = require('./routes/flight');

function routesConfig(app) {
  app.use('/api/flights', flight);
}
module.exports = { routesConfig };
