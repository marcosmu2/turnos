const { Schema, model } = require('mongoose');

const TurnoSchema = Schema({

    horaEntrada : {
        type: String,
        required: true
    },
    horaSalida : {
        type: String
    },
    client : {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    idCancha : {
        type: Number,
        required: true
    },
    fecha : {
        type: Date
    },
    diaFijo:{
        type: Number
    },
    fechaInicioFijo:{
        type: Date
    }

});

TurnoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});


module.exports = model('Turnos', TurnoSchema);