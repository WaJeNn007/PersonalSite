var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/users', usersRouter);

// catch 404 and forward to error handler

let user = {
  'username': 'Aiden'
}
// error handler
app.get("/", (req, res) => {
  res.json(user.username)
})

app.listen(3000, () => {
  
})

module.exports = app;
