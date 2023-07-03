const WebSocket = require('ws');

const WEBSOCKETPORT = 5000;

const wsServer = new WebSocket.Server({port:WEBSOCKETPORT});

let salas = []

wsServer.on('connection', function(socket){
    socket.on('message', function(message){

    });
});