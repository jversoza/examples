const net = require('net');
const PORT = 8080;
const server = net.createServer((sock) => {
    console.log('client connected:', sock.remoteAddress, sock.remotePort);
    sock.on('data', (b) => {
        console.log('got data!', b + '');
        sock.write(b); 
        sock.end();
    });

});
server.listen(PORT);
console.log('started server on port', PORT, '...press ctrl + c to close!');
