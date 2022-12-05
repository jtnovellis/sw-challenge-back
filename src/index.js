const app = require('./app');
const { sequelize } = require('./database');
const { swaggerDoc } = require('./swagger');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, async () => {
  swaggerDoc(app, PORT);
  await sequelize.sync({ force: false });
  console.log(
    `The server is running on port http://localhost:${PORT} in ${NODE_ENV} mode`
  );
});
