var http = require('http');
var fs = require('fs');
//insert utf 8 for actual text.
var readstream = fs.createReadStream(__dirname + '/c/1.txt');
var writestream = fs.createWriteStream(__dirname + '/c/2.txt');

var iter = 0;
readstream.on('data', function(chunk) {
  console.log('Chunk ' + iter + 'detected.');
  writestream.write(chunk);
});
