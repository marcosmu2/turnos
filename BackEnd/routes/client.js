const { Router } = require('express');
//const { check } = require('express-validator');
const { createClient, getAllClient, deleteClient, updateClient } = require('../controllers/client');
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

router.put(
    '/update',
    updateClient 
);

module.exports = router;