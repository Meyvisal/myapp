const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Auto Deploy is working 🐳');
    res.end();
});

server.listen(3000,'0.0.0.0', () => {
    console.log('Server running on port 3000');
});

