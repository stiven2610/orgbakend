const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
}, {
  collection: 'Empresa' // Especifica el nombre de la colección aquí
});


module.exports = mongoose.model("Empresa", empresaSchema);
