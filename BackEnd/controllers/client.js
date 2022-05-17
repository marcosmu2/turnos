const {response } =  require('express');
const Cliente = require('../models/Cliente');

const createClient= async( req, res = response ) => {

    const cliente = new Cliente(req.body);

    await cliente.save();

    res.status(201).json({
        ok:true,
        msg:'registro exitoso'
    });
}

const getAllClient= async( req, res = response ) => {

    let clientes = await Cliente.find().select("_id name phone phone2 address");

    res.status(200).json(clientes);
}

const deleteClient = async( req, res = response) => {

    
    await Cliente.findByIdAndDelete(req.query.id)

    res.status(200).json({
        ok:true,
        msg:'registro borrado con exito'
    });
}

const updateClient = async(req, res = response) => {

    let clienteBody = {...req.body};

    console.log(clienteBody)

    try {
        await Cliente.findByIdAndUpdate({ _id: req.query.id }, clienteBody);
    } catch (error) {
        console.error(error)
    }

    

    res.status(200).json({
        ok:true,
        msg:'registro borrado con exito'
    });
}

module.exports = {createClient, getAllClient, deleteClient, updateClient}
