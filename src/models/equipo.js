const mongoose = require("mongoose");
const empresa = require("./empresa");

const equipoSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: empresa,
      required: true,
    },
    colorPrimario: { type: String, required: true },
    colorSecundario: { type: String, required: true },
  },
  { collection: "Equipo" }
);

module.exports = mongoose.model("Equipo", equipoSchema);
