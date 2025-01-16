const express = require ('express');
const { getEmpresa } = require ('../controllers/empresaControllers');   
const router = express.Router();

router.get('/empresa', getEmpresa);

module.exports = router;