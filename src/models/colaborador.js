const mongoose = require("mongoose");

const colaboradorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    equipo: { type: String, required: true },
    foto: { type: String, required: true },
    puesto: { type: String, required: true },
    fav: { type: Boolean, required: true },
  },
  {
    collection: 'Colaborador',
  }
);

module.exports = mongoose.model('Colaborador', colaboradorSchema);
