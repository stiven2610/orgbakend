const Equipo = require("../models/equipo");

const getEquipos = async (req, res) => {
  try {
    const equipo = await Equipo.find();
    res.status(200).json(equipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error al obtener los equipos", error);
  }
};
const createEquipo = async (req,res) => {
  const { titulo, empresa, colorPrimario, colorSecundario } = req.body;
  const newEquipo = new Equipo({
    titulo,
    empresa,
    colorPrimario,
    colorSecundario,
  });
  try {
    const equipoNew = await newEquipo.save();
    res.status(200).json(equipoNew)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
module.exports = { getEquipos,createEquipo };
