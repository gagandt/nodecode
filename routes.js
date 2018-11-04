var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('req made: ' + req.url);
  if (req.url === '/fh') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/c/1.html').pipe(res);
  }
  else if (req.url === '/json') {
    var nin = [{name: 'll', age: 30}, {name: 'lk', age: 25}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(nin));
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('SMD');
  }
});

server.listen(3000);
console.log("Listening ...");
