const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    console.log('URI de MongoDB:', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {

    });
    console.log('Conexión a MongoDB Atlas exitosa');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Termina el proceso si hay error
  }
};

module.exports = connectDB;
