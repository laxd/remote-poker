var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('New WS connection established');
});

setInterval(function() {
    console.log("Emited vote");
    io.emit('vote', "User voted " + Math.random());
}, 1000);

http.listen(8000, function() {
    console.log('Listening on *:8000');
});
