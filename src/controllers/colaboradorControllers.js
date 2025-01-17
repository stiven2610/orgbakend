const Colaborador = require("../models/colaborador");

const getColaboradores = async (req, res) => {
  try {
    const colaborador = await Colaborador.find();
    res.status(200).json(colaborador);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error al obtener los colaboradores", error);
  }
};
const getColaboradoresEmpresa = async (req, res) => {
  const { empresa } = req.params;
  try {
    const colaboradores = await Colaborador.find(empresa);
    res.status(200).json(colaboradores);
  } catch (error) {}
};
module.exports = { getColaboradores, getColaboradoresEmpresa };
