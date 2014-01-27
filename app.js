
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');



// MongoDB hookup
var mongo = require('mongodb');
var monk = require('monk');

var db = monk('mongodb://lumi:Fibonacci1234@dharma.mongohq.com:10073/gidimongo');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Get Requests
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/insertsong', routes.insertsong(db));
app.get('/userlist', routes.userlist(db));
app.get('/newuser', routes.newuser);
app.get('/top10', routes.top10);

app.get('/playlist/:slug', routes.playlistSearch);


//Post Requests
app.post('/adduser', routes.adduser(db));
app.post('/getplaylist', routes.showplaylist(db));



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



