// Requerimos la funcionalidad de la librería express y la guardamos en una const.
const express = require("express");
const bodyParser = require("body-parser");
// Instanciamos express y lo que nos devuelve lo guardamos en la constante app
const app = express();
// Declaramos el puerto en el que levantaremos el servidor
const port = 3000;

//Necesistamos instanciar dos metodos de la libreria body-parse para poder recoger la informacion que venga enm el cuerpo del request

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
app.get("/miPerfil", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
});

// localhost:3000/conctacto
app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/contacto.html");
});

//
/* 
app.get("/rutaDinamica/:nombre", (req, res) => {
  res.send("ha entrado en la ruta dinamica");
});

app.get("/rutaDinamica/:nombre/:apellidos", (req, res) => {
  res.send("ha entrado en la ruta dinamica 2");
});
 */

//recoger informacion de la URL
//http://localhost:3000/rutaDinamica/alex/gonzalez/33
app.get("/rutaDinamica/:nombre/:apellido/:edad", (req, res) => {
  //refactorizar
  //destructuri
  //hay que crear las variables de los parametros dinamicos /:nombre/:apellido/:edad
  let { nombre, apellido, edad } = req.params;
  //consulta ala base datos
  console.log(nombre, apellido, edad);

  console.log(req.params);
  console.log(req.params.nombre);
  console.log(req.params.apellido);
  console.log(req.params.edad);
  // recoge los parametros dinamicos del navegador /:nombre/:apellido/:edad
  // de las variables creadas
  res.send(`NOMBRE: ${nombre} APELLIDO: ${apellido} EDAD: ${edad}`);
});

//http://localhost:3000/registerForm
app.post("/registerForm", (req, res) => {
  console.log(req.body);

  //name, surname,age son los nombres que le hemso puestoa  los imput
  let { name, surname, age } = req.res;
  res.send(`Nombre: ${name} Apellidos: ${surname} Edad: ${age}`);
});

//Recoger informacion desde los usuarios Body por ejemplo los formularios.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
