const Empresa = require("../models/empresa");

const getEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.find();
    console.log(empresa);
    res.status(200).json(empresa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmpresa = async (req, res) => { 
  try {
    const { nombre, correo , contraseña } = req.body;
    const newEmpresa = new Empresa({ nombre, correo, contraseña }); 
    const empresaNew = await newEmpresa.save();
    res.status(201).json(empresaNew);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
} 

module.exports = { getEmpresa, createEmpresa };