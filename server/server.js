const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express(); //use express to make web server
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); //middleware

io.on('connection', (socket) =>{
console.log('New User connected');


socket.emit('newMessage', {
    from: 'samkit@gmail.com',
    text: 'Hi dear',
    createdAt: 123 
});


socket.on('disconnect', () => {
    console.log('User disconnected');
});

socket.on('createMessage', (createMessage) => {
    console.log('Message', createMessage);
});

});



server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

// module.exports = {app};