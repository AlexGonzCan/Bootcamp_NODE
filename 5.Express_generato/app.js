var createError = require('http-errors'); // libreria de errores
var express = require('express'); // libreria expres
var path = require('path'); // libreria para crear rutas o path
var cookieParser = require('cookie-parser'); // control de cookie
var logger = require('morgan'); // registra las solicitudes http

// Requerimos los archivos  de rutas
var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');//

var app = express();

// view engine setup
// Ruta estática a la carpeta de vistas (html)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Nos muestra las peticiones entrantes por la consola
app.use(logger('dev'));

// metodos necesarios para capturar la informacion de los formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//controll de cookies
app.use(cookieParser());

// Indicamos la ruta de entrada a public 
app.use(express.static(path.join(__dirname, 'public')));

// Indicamos la ruta de entrada a nuestros archivos de rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter); //

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
