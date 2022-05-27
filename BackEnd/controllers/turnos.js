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

    if (req.body.fecha === undefined && req.body.diaFijo === undefined){
        return res.status(400).json({
            ok:false,
            msg:'body debe contener un dia fijo o una fecha'
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

const getTurnosByDate= async( req, res = response ) => {
    
    try {
        
    const dateInp = new Date(req.query.date);
    
    const day = dateInp.getDay();
    
        const turnosFijos = await Turnos.find({diaFijo : day});
        console.log(turnosFijos)
        const turnosDia = await Turnos.find({fecha : dateInp })
        console.log(turnosDia)

        const turnosOut = turnosDia.concat(turnosFijos)
    
        res.status(200).json(turnosOut);

    } catch (error) {
        errorReturn(res, error);
    }

}

module.exports = {
    createTurno,
    getTurnosByDate
}
