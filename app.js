var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
// adding middleware for static files.
/*app.use('assets/', function(req, res, next){
  //console.log(req.url);
  // custom route her, but we have an alternative!
  next();
});*/

app.use('/assets', express.static('assets'));

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

app.get('/q', function(req, res){
  //console.log(req.query);
  res.render('q', {
    qs: req.query
  });
});

app.get('/contact', function(req, res){
  //console.log(req.query);
  res.render('contact', {qs: req.query});
});

//used this
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/contact', urlencodedParser, function(req, res){
  //console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.listen(3000);
