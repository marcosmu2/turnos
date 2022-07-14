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
    
        const turnosFijos = await Turnos.find({diaFijo : day}).populate('client');

        const turnosFijosFilter = turnosFijos.filter(x => x.fechaInicioFijo <= dateInp)

        const turnosDia = await Turnos.find({fecha : dateInp }).populate('client');

        const turnosOut = turnosDia.concat(turnosFijosFilter);
    
        res.status(200).json(turnosOut);

    } catch (error) {
        errorReturn(res, error);
    }
}

const updateTurno = async(req, res = response) => {

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

    let turnoBody = {...req.body};
    const turnoId = req.query.id;

    try {
        const turno = await Turnos.findById( turnoId );

        if(turno != null){

            const day =new Date(turnoBody.fecha).getDay();
    
            const turnoFijos = await Turnos.find({horaEntrada : turnoBody.horaEntrada, horaSalida: turnoBody.horaSalida, diaFijo : day}).populate('client');

            const turno = await Turnos.find({horaEntrada : turnoBody.horaEntrada, horaSalida: turnoBody.horaSalida, fecha : turnoBody.fecha }).populate('client');

            const turnosOut = turno.concat(turnoFijos);

            if(turnosOut.length === 0 || (turnosOut.length === 1 && turnosOut[0].idCancha !== turnoBody.idCancha) ){

                    await Turnos.findByIdAndUpdate({ _id: turnoId }, turnoBody);
                                
                    return res.status(200).json({
                        ok:true,
                        msg:'registro actualizado con exito'
                    });
            }
            if(turnosOut.length === 1){

                turnoBody = {...turnoBody, idCancha : (turnoBody.idCancha == 1)?2:1 }

                await Turnos.findByIdAndUpdate({ _id: turnoId }, turnoBody);
                                
                return res.status(200).json({
                    ok:true,
                    msg:'registro actualizado con exito'
                });
            }

            res.status(400).json({
                ok:false,
                msg:'el horario y fecha elegidos se encuentra totalmente ocupado'
            });

           
        }else{
            res.status(400).json({
                ok:false,
                msg:'no existe el registro que intenta actualizar'
            });
        }

    } catch (error) {
        errorReturn(res, error);
    }

}


const deleteTurno = async( req, res = response) => {

    const turnoId = req.query.id;

    try {

        const turno = await Turnos.findById( turnoId );

        if(turno != null){
            await Turnos.findByIdAndDelete(turnoId)
        
            res.status(200).json({
                    ok:true,
                    msg:'registro borrado con exito'
                });
        }else{
            res.status(400).json({
                ok:false,
                msg:'no existe el registro que intenta borrar'
            });
        }
        
    } catch (error) {
        errorReturn(res, error);
    }

    
}


module.exports = {
    createTurno,
    getTurnosByDate,
    updateTurno,
    deleteTurno
}
