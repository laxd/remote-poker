var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('New WS connection established');

    socket.on('userJoin', function(username) {
        console.log(username + " joined");
        socket.emit('userJoin', username);
    });
});


http.listen(8000, function() {
    console.log('Listening on *:8000');
});
