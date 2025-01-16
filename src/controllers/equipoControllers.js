const Equipo = require("../models/equipo");

const getEquipos = async (req,res )=>{
try {
    const equipo = await Equipo.find(); 
    res.status(200).json(equipo);
} catch (error) {
    res.status(500).json({message: error.message});
    console.log('error al obtener los equipos',error)
}
}

module.exports = {getEquipos};