const express = require("express");

//Requerimos nuestros archivos y los gurdamos en una constante o variable
const indexRoutes = require("./routes/index.js");
const userRoutes = require("./routes/user.js");
const technologyRoutes = require("./routes/technology.js");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//para que puedda mostrar los estilos y las imagenes
app.use(express.static(__dirname + "/public"));

//Rutas de entrada a los archivos de las variables que hemos aguardado

//localhost:3000/index
app.use("/index", indexRoutes);

//localhost:3000/user
app.use("/user", userRoutes);

//localhost:3000/technology
app.use("/technology", technologyRoutes);

/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
