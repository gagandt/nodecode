var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '/c/1.txt');
var writestream = fs.createWriteStream(__dirname + '/c/2.txt');


readstream.pipe(writestream);
