// librería que maneja los errores
var createError = require("http-errors");

var express = require("express");
// librería para crear rutas o path
var path = require("path");
// Librería para el control de cookies
var cookieParser = require("cookie-parser");
// Registra las solicitudes http
var logger = require("morgan");
// Requerimos los archivos de rutas
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/product");

var app = express();

// view engine setup
// Ruta estática a la carpeta de vistas (html)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Nos muestra las peticiones entrantes por la consola
app.use(logger("dev"));
// métodos necesarios para capturar la información de los formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// control de cookies
app.use(cookieParser());
// Ruta a la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Indicamos la ruta de entrada a nuestros archivos de rutas
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);

// control de errores
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
