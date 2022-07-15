const express = require("express");
const router = express.Router();

//localhost/3000/admin
router.get("/", (req, res) => {
  res.send("Hello admin!");
});

//localhost:3000/admin/params/:color
router.get("/params/:color", (req, res) => {
  let color = req.params.color;
  res.send(`Estas en el admin y en el color es ${color}`);
});

//localhost:3000/admin

router.post("/", (req, res) => {
  let { name, sourname, age } = req.body;
  res.send(`nombre: ${name} apellido: ${sourname} age: ${age}`);
});
module.exports = router;
