const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema({
  _id:{ type: String, required: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
});

module.exports = mongoose.model("Empresa", empresaSchema);
