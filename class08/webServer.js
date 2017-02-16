const net = require('net');
const [HOST, PORT] = ['127.0.0.1', 8080];

// helper function to wrap a status and body
// in a valid http response
function createResponse(status, body) {

    return `HTTP/1.1 ${status} OK
Content-Type: text/html

${body}`;

}

// object that holds all of our possible paths, along with a corresponding
// function that handles that path
const routes = {
    '/hello' : (sock) => { sock.write(createResponse(200, '<h1>HELLO THERE</h1>' )); },
    '/goodbye' : (sock) => { sock.write(createResponse(200, '<em>see ya later</em>>' )); },
    '/foo' : (sock) => { sock.write(createResponse(200, 'barbarbarbar' )); }
};


// an object that represents an http request
class Request {
    constructor(s) {
        const path = s.split(' ')[1];
        this.path = path;
    }
}

// create a server
// when a client connects call the callback function provided (the arrow 
// function that takes a socket as an argument)
const server = net.createServer((sock) => {

    // do this stuff when a client connects:
    
    // show the connected client's ip address and port
    console.log(sock.remoteAddress, sock.remotePort);

    // when the connected client sends us data...
    sock.on('data', (binaryData) => {

        // convert buffer object to string, and use request object
        // to parse http request string into actual object
        const req = new Request(binaryData + '');
        console.log('path', req.path);

        // with the request object's path, find the right function to 
        // handle the path (or 404 if we don't handle that path)
        if(routes.hasOwnProperty(req.path)) {
            const requestHandler = routes[req.path];
            requestHandler(sock);
        } else {
            sock.write(createResponse(404, 'this is a 404!'));
        }

        // close the connection the client
        sock.end();
    });
});

// listen on this port and address (if using 127.0.0.1, then accessible in
// browser as localhost:8080)
server.listen(PORT, HOST);



















