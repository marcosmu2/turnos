const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    name : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    }
});

module.exports = model('Cliente', ClienteSchema);