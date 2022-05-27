const { Router } = require('express');
const { createTurno } = require('../controllers/turnos');

const router = Router();



router.post(
    '/new',
    createTurno 
);

// router.get(
//     '/',
//     getAllClient 
// );

// router.delete(
//     '/delete',
//     deleteClient 
// );

// router.put(
//     '/update',
//     updateClient 
// );

module.exports = router;