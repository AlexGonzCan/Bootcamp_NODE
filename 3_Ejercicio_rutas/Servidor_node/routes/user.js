//requerimos la configuracion de las librerias de Express
const express = require("express");

//instanciamo el metodo de router de la librerias de Express para crear los endpoint
const router = express.Router();

//app lo cambiamos por router
//localhost:3000/user por defecto
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/formulario.html");
});

//confirmamos el usuario creado con el post
//localhost:3000/user/formRegister
router.post("/formRegister", (req, res) => {
  //añadir los name=""de los imput de los formulario
  let { name, surname, age, height, job } = req.body;
  console.log(req.body);
  res.send(
    `Nombre: ${name}\n Apellidos: ${surname}\n ${age} \n Altura: ${height} \n Profesion: ${job}`
  );
});

// exportamos la constante router
module.exports = router;
