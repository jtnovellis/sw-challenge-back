const app = require('./app');
const { sequelize } = require('./databse');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(
    `The server is running on port http://localhost:${PORT} in ${NODE_ENV} mode`
  );
});
