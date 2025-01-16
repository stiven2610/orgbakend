const express = require('express');
const userRoutes = require('./routes/empresaRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Rutas
app.use('/', userRoutes);

module.exports = app;
