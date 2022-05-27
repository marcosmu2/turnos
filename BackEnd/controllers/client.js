const {response } =  require('express');
const Cliente = require('../models/Cliente');
const { errorReturn } = require('../functions/errorReturnFn');


const createClient = async( req, res = response ) => {

    if (req.body.name === undefined){
        return res.status(400).json({
            ok:false,
            msg:'body debe contener nombre'
        });
    }
    
    if (req.body.phone === undefined){
        return res.status(400).json({
            ok:false,
            msg:'body debe contener un telefono'
        });
    }

    try {

        const cliente = new Cliente(req.body);
    
        await cliente.save();
    
        res.status(201).json({
            ok:true,
            msg:'registro exitoso'
        });
        
    } catch (error) {
        errorReturn(res, error);

    }

}

const getAllClient= async( req, res = response ) => {

    try {
               
        const clientes = await Cliente.find().select("_id name phone phone2 address, interest");
    
        res.status(200).json(clientes);

    } catch (error) {
        errorReturn(res, error);
    }

}

const deleteClient = async( req, res = response) => {

    const clienteId = req.query.id;

    try {

        const cliente = await Cliente.findById( clienteId );

        if(cliente != null){
            await Cliente.findByIdAndDelete(clienteId)
        
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

const updateClient = async(req, res = response) => {

    let clienteBody = {...req.body};
    const clienteId = req.query.id;

    try {
        const cliente = await Cliente.findById( clienteId );

        if(cliente != null){

            await Cliente.findByIdAndUpdate({ _id: clienteId }, clienteBody);
            
            res.status(200).json({
                ok:true,
                msg:'registro actualizado con exito'
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

module.exports = {createClient, getAllClient, deleteClient, updateClient}
