const express = require ('express');
const { getEmpresas, createEmpresa } = require ('../controllers/empresaControllers');   
const { login } = require('../controllers/loginControllers');
const { getEquipos, createEquipo } = require('../controllers/equipoControllers');
const { getColaboradores, getColaboradoresEmpresa } = require('../controllers/colaboradorControllers');
const router = express.Router();

router.get('/empresas', getEmpresas);
router.post('/empresa', createEmpresa);
router.post('/login', login);
router.get('/equipos',getEquipos);
router.get('/colaboradores',getColaboradores);
router.get('/colaboradores/:empresa',getColaboradoresEmpresa);
router.post('/equipo',createEquipo)
module.exports = router;