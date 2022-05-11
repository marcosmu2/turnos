const { Router } = require('express');
//const { check } = require('express-validator');
const { createClient } = require('../controllers/client');
//const { validarCampos } = require('../middlewares/validar-campos');
//const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
//const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();



router.post(
    '/new',
    createClient 
);

module.exports = router;