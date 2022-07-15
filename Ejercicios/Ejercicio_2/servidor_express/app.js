const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//localhost:3000/home/casa/metros/habitaciones
app.get("/home/:casa/:metros/:habitaciones", (req, res) => {
  let { casa, metros, habitaciones } = req.params;

  res.send(
    `NOMBRE: ${casa} METROS DE LA CASA: ${metros} NUMERO DE HABITACIONES: ${habitaciones}`
  );
});

//localhost:3000/inquilinos/numero_inquilinos/precio_alquiler
app.get("/:inquilinos/:numero_inquilinos/:precio_alquiler", (req, res) => {
  let { inquilinos, numero_inquilinos, precio_alquiler } = req.params;

  res.send(`${inquilinos}
    Numero de Inquilinos: ${numero_inquilinos} Precio alquiler: ${precio_alquiler}`);
});

//localhost:3000/Formulario
app.post("/:Formulario", (req, res) => {
  let { nameCalle, numCalle, provicia } = req.params;
  res.send(
    `Nombre de la calle: ${nameCalle} Numero: ${numCalle} Provincia: ${provicia}`
  );
});

//localhost:3000/Formulario
app.post("/Formulario", (req, res) => {
  let { nameCalle, numCalle, provicia } = req.body;

  res.send(
    `Nombre de la calle: ${nameCalle} Numero: ${numCalle} Provincia: ${provicia}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
