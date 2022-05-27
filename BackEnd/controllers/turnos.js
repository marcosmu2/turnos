const {response } =  require('express');
const Turnos = require('../models/Turnos');
const { errorReturn } = require('../functions/errorReturnFn');

const createTurno = async( req, res = response ) => {

    if (req.body.horaEntrada === undefined){
        return res.status(400).json({
            ok:false,
            msg:'body debe contener hora de entrada'
        });
    }
    
    if (req.body.idCancha === undefined){
        return res.status(400).json({
            ok:false,
            msg:'body debe contener un id de cancha'
        });
    }

    if (req.body.fecha === undefined || req.body.diaFijo === undefined){
        return res.status(400).json({
            ok:false,
            msg:'body debe contener una fecha o un dia fijo'
        });
    }

    try {

        const turno = new Turnos(req.body);
    
        await turno.save();
    
        res.status(201).json({
            ok:true,
            msg:'registro exitoso'
        });
        
    } catch (error) {
        errorReturn(res, error);

    }

}

module.exports = {
    createTurno
}
