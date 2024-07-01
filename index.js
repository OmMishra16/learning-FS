const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
    let filePath = '';
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/login') {
        filePath = path.join(__dirname, 'login.html');
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const port = 3090;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
