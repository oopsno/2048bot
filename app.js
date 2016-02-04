var express = require('express');
var path = require('path');

var app = express();

// serve 2048
app.use(express.static(path.join(__dirname, '2048')));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
