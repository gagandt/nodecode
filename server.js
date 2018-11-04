var http = require('http');

var server = http.createServer(function(req, res){
  console.log('req made: ' + req.url);
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Contains text that can be sent back.');
});

server.listen(3000);
console.log("Listening ...");
