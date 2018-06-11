var socket = io();

   socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'samkit@gmail.com',
        text: 'hi dear!'
    });

    });

    socket.on('disconnect', function (){
        console.log('server disconnected');
    });

    socket.on('newMessage', function(newMessage) {
        console.log('New Message', newMessage);
    })

   
