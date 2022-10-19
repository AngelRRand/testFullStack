const express = require('express')
const morgan = require('morgan');
const routes = require('./routes');
const server = express()
var cors = require('cors')

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

server.use(cors(corsOptions))
server.use(morgan('dev'));
server.use('/', routes);
server.set('Authorization', `Bearer aSuperSecretKey`)

module.exports = server;