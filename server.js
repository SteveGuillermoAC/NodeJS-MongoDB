const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const app = express();

const index_libro = require('./Routes/routesLibro');
var connection = require('./ConfigConnections/ConnectionDB');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

//see petitions
app.use(morgan('dev'));

//routes

app.use('/',index_libro);

//port
var port = process.env.PORT || 1234
app.listen(port,() =>{
    console.log('Iniciado', port)
})
