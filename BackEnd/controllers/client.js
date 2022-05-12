const {response } =  require('express');
const Cliente = require('../models/Cliente');

const createClient= async( req, res = response ) => {

    //const {name, phone } = ;

    const cliente = new Cliente(req.body);

    await cliente.save();

    res.status(201).json({
        ok:true,
        msg:'registro exitoso'
    });
}

const getAllClient= async( req, res = response ) => {

    let clientes = await Cliente.find().select("_id name phone");

    res.status(200).json(clientes);
}

const deleteClient = async( req, res = response) => {

    
    await Cliente.findByIdAndDelete(req.query.id)

    res.status(200).json({
        ok:true,
        msg:'registro borradoso'
    });
}

module.exports = {createClient, getAllClient, deleteClient}
