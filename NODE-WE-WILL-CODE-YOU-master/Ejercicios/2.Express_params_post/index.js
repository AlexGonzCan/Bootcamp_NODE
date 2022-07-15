const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

// localhost:3000/home/:casa/:metros/:habitaciones
app.get("/home/:casa/:metros/:habitaciones", (req, res) => {
  let { casa, metros, habitaciones } = req.params;
  res.send(
    `La casa ${casa} tiene ${metros} metros y ${habitaciones} habitaciones`
  );
});

// localhost:3000/inquilinos/:numero_iquilinos/precio_alquiler
app.get("/inquilinos/:numero_inquilinos/:precio_alquiler", (req, res) => {
  let { numero_inquilinos, precio_alquiler } = req.params;
  res.send(
    `El piso tiene ${numero_inquilinos} inquilinos y cuesta ${precio_alquiler}€ por persona`
  );
});

// localhost:3000/verFormulario
app.get("/verFormulario", (req, res) => {
  res.sendFile(__dirname + "/formulario.html");
});

// localhost:3000/direccion_envio
app.post("/direccion_envio", (req, res) => {
  let { street, number, province } = req.body;
  res.send(
    `La dirección de envío es : ${street}, ${number}, de la provincia ${province}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
