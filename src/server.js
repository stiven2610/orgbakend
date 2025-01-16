require('dotenv').config();
const connectDB = require('./config/database');
const app = require('./app');

// Conexión a la base de datos
connectDB();

// Inicia el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
