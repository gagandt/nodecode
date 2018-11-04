var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('req made: ' + req.url);
  res.writeHead(200, {'content-type': 'text/html'});
  var readstream = fs.createReadStream(__dirname + '/c/1.html', 'utf8');
  readstream.pipe(res);
});

server.listen(3000);
console.log("Listening ...");
