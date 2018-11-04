var express = require('express');

var app = express();

app.get('/', function(res, req){
  req.send('This is the Homepage.');
});

app.get('/another', function(res, req){
  req.send('This is the another page.');
});

app.get('/j', function(res, req){
  req.send(JSON.stringify({name: 'jjj', age: 18}));
});

app.listen(3000);
