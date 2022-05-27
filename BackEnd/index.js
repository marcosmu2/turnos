const express = require('express')
const cors = require('cors');

const { dbConnection } = require('./database/config')

const app = express();

dbConnection();

app.use(cors());

app.use( express.static('public') );

app.use( express.json() );

app.use('/api/client', require('./routes/client') );
app.use('/api/shift', require('./routes/turno') );
// TODO: CRUD: Eventos

app.listen( 4001, () => {
    console.log(`Servidor corriendo en puerto ${ 4001 }`);
});