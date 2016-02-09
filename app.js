
//Module dependencies

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

//create app object
var app = express()

//Stylus config
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}


//Jade Template Engine Config
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));



//Tell Express to use static routes
app.use(express.static(__dirname + '/public'));


//Route for home page
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
});

//Route for page one
app.get('/page02', function (req, res) {
  res.render('page02',
  { title : 'Part Two' }
  )
});


//Route for page two
app.get('/page03', function (req, res) {
  res.render('page03',
  { title : 'Part Three' }
  )
});

//Route for page three
app.get('/page04', function (req, res) {
  res.render('page04',
  { title : 'Part Four' }
  )
});

//Liston on port 3000
app.listen(3000)