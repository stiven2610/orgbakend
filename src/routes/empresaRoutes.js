const express = require ('express');
const { getEmpresas, createEmpresa } = require ('../controllers/empresaControllers');   
const { login } = require('../controllers/loginControllers');
const { getEquipos, createEquipo } = require('../controllers/equipoControllers');
const { getColaboradores, getColaboradoresEmpresa } = require('../controllers/colaboradorControllers');
const {  validarToken } = require('../middleware/middleware');
const router = express.Router();

router.get('/empresas',validarToken, getEmpresas);
router.post('/empresa',validarToken, createEmpresa);
router.post('/login', login);
router.get('/equipos',validarToken,getEquipos);
router.get('/colaboradores',validarToken,getColaboradores);
router.get('/colaboradores/:empresa',validarToken,getColaboradoresEmpresa);
router.post('/equipo',validarToken,createEquipo)
module.exports = router;