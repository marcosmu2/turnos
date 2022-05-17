const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    phone2 : {
        type : String
    },
    address : {
        type : String
    }
});

module.exports = model('Cliente', ClienteSchema);