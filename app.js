var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

// User profile routes
// this routes to the files that will render your page
var neil = require('./routes/profiles/neil');
var tomche = require('./routes/profiles/tomche');
var bryan = require('./routes/profiles/bryan');
var tracy = require('./routes/profiles/tracy');
var anguel = require('./routes/profiles/anguel');
var farhan = require('./routes/profiles/farhan');
var neil_b = require('./routes/profiles/neil_b');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* routes */
app.use('/', index);

/* routes for our User profiles */
app.use('/neil', neil);
app.use('/tomche', tomche);
app.use('/bryan', bryan);
app.use('/tracy', tracy);
app.use('/anguel', anguel);
app.use('/farhan', farhan);
app.use('/neil_b', neil_b);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('¯\\_(ツ)_/¯');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
