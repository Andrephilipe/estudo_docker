var http = require('http');

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

http.createServer(function(req,res) {
 res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
 res.end('Exemplo Node.js Mundo Docker! ' + today);

}).listen(8080);