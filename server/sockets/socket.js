const { io } = require('../server');

io.on('connection', (client) => {

    console.log('User connected');

    client.emit('sendMessage', {
        user: 'Administrator',
        message: 'Welcome to the socket app'
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Listen client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        // if (message.user) {
        //     callback({
        //         res: 'All good'
        //     });
        // } else {
        //     callback({
        //         res: 'Something went wrong'
        //     });
        // }
    });

});