// Setup basic express server
require('dotenv').config()

var express = require('express');
var app     = express();
var path    = require('path');
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);
var port    = process.env.PORT || 3030;
var routes  = require('./routes/index')
// var redis   = require('socket.io-redis');
// const consant = require('./libraries/constants');
require('./socket/socket')(io);

// io.adapter(redis({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }));

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

app.use(express.json())

app.use(async function(request, response, next) {
    response.io = io;
    next();
});
// Routing
// app.use(express.static(path.join(__dirname, 'src')));
app.use('/', routes)

app.use(function(request, response) {
    response.status(404).send({url: request.originalUrl + ' not found'})
})