const { Router } = require('express');
//const { check } = require('express-validator');
const { createClient, getAllClient, deleteClient } = require('../controllers/client');
//const { validarCampos } = require('../middlewares/validar-campos');
//const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
//const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();



router.post(
    '/new',
    createClient 
);

router.get(
    '/',
    getAllClient 
);

router.delete(
    '/delete',
    deleteClient 
);


module.exports = router;