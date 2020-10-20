// emit: send informarion; on: listen for information
var socket = io();

socket.on('connect', function() {
    console.log('Server connected');
});

socket.on('disconnect', function() {
    console.log('Server connection lost');
});

socket.emit('sendMessage', {
    user: 'Miguel',
    message: 'Hello World',
}, function(res) {
    console.log('Server response:', res);
});

socket.on('sendMessage', function(message) {
    console.log('Server:', message);
});