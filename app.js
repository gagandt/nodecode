var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(res, req){
  req.sendFile(__dirname + '/c/1.html');
});

app.get('/another', function(res, req){
  req.send('This is the another page.');
});

app.get('/j', function(res, req){
  req.send(JSON.stringify({name: 'jjj', age: 18}));
});

app.get('/profile/:name', function(req, res){
  var data = {
    age: 20,
    tat: 2,
    dir: ['east', 'west', 'north']
  };
  res.render('profile', {
    person: req.params.name,
    data: data
  });
});

app.listen(3000);
