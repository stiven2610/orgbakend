const Empresa = require("../models/empresa");

const getEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.find();
    res.status(200).json(empresa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getEmpresa };