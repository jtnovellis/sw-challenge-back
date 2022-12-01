require('dotenv').config();
const express = require('express');
const { routesConfig } = require('./routes.config');

const app = express();

app.use(express.json());
routesConfig(app);

module.exports = app;
