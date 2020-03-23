<<<<<<< HEAD
var createError = require('http-errors');
=======
>>>>>>> part-2
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
var apiRouter   = require('./routes/api')

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

=======
var apiRouter = require('./routes/api')
var patientsRouter = require('./routes/patients')

var app = express();

>>>>>>> part-2
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
<<<<<<< HEAD



=======
app.use('/patients', patientsRouter)
>>>>>>> part-2

module.exports = app;
