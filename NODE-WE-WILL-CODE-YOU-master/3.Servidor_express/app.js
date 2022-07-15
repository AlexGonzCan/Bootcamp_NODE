// Requerimos la funcionalidad de la librería express y la guardamos en una const.
const express = require("express");
// Requerimos la libría body-parser;
const bodyParser = require("body-parser");
// Instanciamos express y lo que nos devuelve lo guardamos en la constante app
const app = express();
// Declaramos el puerto en el que levantaremos el servidor
const port = 3000;
// Necesitamos instanciar dos métodos de la librería body-parser para poder recoger
// la información que venga en el cuerpo del request.

// app.use(bodyParser.urlencoded({ extends: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extends: false }));
app.use(express.json());

// localhost:3000/
app.get("/", (req, res) => {
  //   console.log(res, "response");

  res.send("Hello clase!");
});

// localhost:3000/segundaRuta
app.get("/segundaRuta", (req, res) => {
  res.send("Esta es la segunda ruta");
});

// __dirname y __filename son variables globales
console.log(__dirname, "dirname");
console.log(__filename, "filename");
// localhost:3000/home
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// localhost:3000/miPerfil
app.get("/miPe", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
});

// localhost:3000/contacto
app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/contacto.html");
});
// localhost:3000/rutaDinamica/:nombre/:apellidos
app.get("/rutaDinamica/:nombre/:apellidos/:edad", (req, res) => {
  // let nombre = req.params.nombre;
  // let apellidos = req.params.apellidos;
  // let edad = req.params.edad;
  let { nombre, apellidos, edad } = req.params;
  // consulta a la base de datos
  console.log(nombre, apellidos, edad);
  res.send(`NOMBRE: ${nombre}, APELLIDOS: ${apellidos}, EDAD: ${edad}`);
});

// localhost:3000/registerForm
app.post("/registerForm", (req, res) => {
  console.log(req.body);
  let { name, surname, age } = req.body;
  res.send(`Nombre: ${name}, apellidos: ${surname}, edad:${age}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
