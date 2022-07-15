//requerimos la configuracion de las librerias de Express
const express = require("express");

//instanciamo el metodo de router de la librerias de Express para crear los endpoint
const router = express.Router();

//app lo cambiamos por router
//localhost:3000/technology por defecto
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/technology.html");
});
// exportamos la constante router
module.exports = router;
