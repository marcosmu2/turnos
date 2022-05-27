const { Router } = require('express');
const { createTurno, getTurnosByDate } = require('../controllers/turnos');

const router = Router();



router.post(
    '/new',
    createTurno 
);

router.get(
    '/',
    getTurnosByDate
);

// router.delete(
//     '/delete',
//     deleteClient 
// );

// router.put(
//     '/update',
//     updateClient 
// );

module.exports = router;