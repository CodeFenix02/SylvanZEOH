const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  exec('ls', (error, stdout, stderr) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error interno del servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(stdout);
    }
  });
});

const PORT = 8080;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});
