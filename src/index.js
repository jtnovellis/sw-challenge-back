const app = require('./app');
const { sequelize } = require('./database');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

/* require('./models/airline');
require('./models/airport');
require('./models/flight'); */

app.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log(
    `The server is running on port http://localhost:${PORT} in ${NODE_ENV} mode`
  );
});
