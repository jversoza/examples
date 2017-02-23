const net = require('net');
class App {
    constructor() {
        this.routes = {};
        this.server = net.createServer((sock) => {
            sock.on('data', (binaryData) => {
                const [method, path] = (binaryData + '').split(' ');
                console.log(method, path);
				// pass in request and response object in homework!
                this.routes[path](sock);
                sock.close();
            });
        });
    }

    addPath(path, cb) {
        this.routes[path] = cb;
    }

    listen() {
        this.server.listen(8080);
    }
}

const app = new App();
app.addPath('/hello', (sock) => {
    sock.write(`HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<h2>Hello</h2>`);
});
app.addPath('/goodbye', (sock) => {
    sock.write(`HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<em>Bye</em>`);
});
app.listen();
// go to http://localhost:8080/hello 
