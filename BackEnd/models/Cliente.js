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
    },
    interest: {
        type: Boolean
    }

});

module.exports = model('Cliente', ClienteSchema);