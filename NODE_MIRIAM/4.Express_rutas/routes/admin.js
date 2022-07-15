const express = require("express");
const router = express.Router();

// localhost:3000/admin
router.get("/", (req, res) => {
  res.send("Hola administrador");
});

// localhost:3000/admin/params/:color
router.get("/params/:color", (req, res) => {
  let color = req.params.color;
  res.send(`Estás en admin y el color es ${color}`);
});
// localhost:3000/admin/params/:color/:forma
router.get("/params/:color/:forma", (req, res) => {
  let color = req.params.color;
  res.send(`Estás en admin y el color es ${color}`);
});

// localhost:3000/admin
router.post("/", (req, res) => {
  let { name, surname, age } = req.body;
  res.send(`nombre: ${name}, apellido:${surname}, age:${age}`);
});

module.exports = router;
