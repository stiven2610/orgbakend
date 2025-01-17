const Empresa = require("../models/empresa");
const bcrypt = require("bcryptjs");
const getEmpresas = async (req, res) => {
  try {
    const empresa = await Empresa.find();
    res.status(200).json(empresa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmpresa = async (req, res) => { 
  try {
    const { nombre, correo, contraseña } = req.body;
    // Crear una nueva instancia del modelo Empresa
    const newEmpresa = new Empresa({
      nombre,
      correo,
      contraseña
    });

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    newEmpresa.contraseña = await bcrypt.hash(contraseña, salt);

    // Guardar la nueva empresa en la base de datos
    const empresaNew = await newEmpresa.save();

    // Enviar la respuesta con la empresa creada
    res.status(201).json(empresaNew);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getEmpresas, createEmpresa };