const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/turnos?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false');
        console.log('db online')
    } catch (error) {
        console.log(error);
        throw new Error('error a la hora de inicializar la base de datos');
    }
}

module.exports = {
    dbConnection
}