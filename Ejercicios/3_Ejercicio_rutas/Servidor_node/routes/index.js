//requerimos la configuracion de las librerias de Express
const express = require("express");

//instanciamo el metodo de router de la librerias de Express para crear los endpoint
const router = express.Router();

//app lo cambiamos por router

//localhost:3000/index por defecto
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/petry.html");
});

//por defecto hasta la raiz localhost:3000/index/ algo
//localhost:3000/index/segunda_ruta
router.get("/segunda_ruta", (req, res) => {
  res.send("segunda ruta desde /index");
});

// exportamos la constante router
module.exports = router;
