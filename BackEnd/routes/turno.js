const { Router } = require('express');
const { createTurno, getTurnosByDate, updateTurno, deleteTurno } = require('../controllers/turnos');

const router = Router();



router.post(
    '/new',
    createTurno 
);

router.get(
    '/',
    getTurnosByDate
);

router.delete(
    '/delete',
    deleteTurno 
);

router.put(
    '/update',
    updateTurno 
);

module.exports = router;