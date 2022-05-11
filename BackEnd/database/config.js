const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb+srv://mern_user:ztvcH7ZPHnvirgAs@cluster0.7uktu.mongodb.net/turnos');
        console.log('db online')
    } catch (error) {
        console.log(error);
        throw new Error('error a la hora de inicializar la base de datos');
    }
}

module.exports = {
    dbConnection
}