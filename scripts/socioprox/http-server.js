// To run: node http-server.js

const HTTP_ADDR = "192.168.50.1";
const HTTP_PORT = 8000;

const http = require('http');
const fs = require('fs');

const handleRequest = function(request, response) {
  console.log('request received: ' + request.url);

  if(request.url === '/simplepeer.min.js') {
    response.writeHead(200, {'Content-Type': 'application/javascript'});
    response.end(fs.readFileSync('simplepeer.min.js'));
    
  } else if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end( '<html><body>No Doc!</body></html>' );
  }
};

const httpServer = http.createServer(handleRequest);
httpServer.listen(HTTP_PORT, HTTP_ADDR);

console.log('--------------------------------------------');
console.log('Server running. http://' + HTTP_ADDR + ':' + HTTP_PORT );
console.log('--------------------------------------------');
