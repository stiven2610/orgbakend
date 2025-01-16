const express = require ('express');
const { getEmpresa, createEmpresa } = require ('../controllers/empresaControllers');   
const router = express.Router();

router.get('/empresa', getEmpresa);
router.post('/empresa', createEmpresa);
module.exports = router;