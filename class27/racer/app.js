const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const racers = {'racer1':0, 'racer2':0};
io.on('connection', (socket) => {

    io.emit('click', racers);

    console.log(socket.id, 'connected');
    socket.on('click', (data) => {
        racers[data] += 5;
        io.emit('click', racers);
        console.log(data);
    });
});
app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000);
