var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('req made: ' + req.url);
  res.writeHead(200, {'content-type': 'application/json'});
  var myObj = {
    name: 'Lakshya',
    job: 'Bouncer',
    ambition: 'Pornstar',
    age: 30
  };

  res.end(JSON.stringify(myObj));
});

//res.end() expects a string or a buffer(stream).

server.listen(3000);
console.log("Listening ...");
