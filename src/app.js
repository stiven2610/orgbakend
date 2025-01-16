const express = require('express');
const userRoutes = require('./routes/empresaRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/', userRoutes);

module.exports = app;
