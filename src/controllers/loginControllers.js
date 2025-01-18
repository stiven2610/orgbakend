const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const Empresa = require("../models/empresa");

const login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const empresa = await Empresa.findOne({ correo });
    if (!empresa)
      return res.status(400).json({ message: "Usuario o contraseña Incorrectos!!!" });
       const match = await bcrypt.compare(contraseña, empresa.contraseña);
    if (!match)
      return res.status(400).json({ message: "Usuario o contraseña Incorrectos!!!" });
    const payload = {
        empresa: {
            id: empresa.id,
        },
    }
    res.status(200).json({
        token: jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 3600,
        }),
    });
  } catch (error) {}
};

module.exports = { login };