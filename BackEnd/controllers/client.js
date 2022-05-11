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

module.exports = {createClient}