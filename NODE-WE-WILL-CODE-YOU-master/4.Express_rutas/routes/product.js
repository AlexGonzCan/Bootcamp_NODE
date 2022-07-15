const express = require("express");
const router = express.Router();

// Ruta raíz: localhost:3000/product

// localhost:3000/product
router.get("/", (req, res) => {
  res.send("Hola producto");
});

// localhost:3000/product/mochila
router.get("/mochila", (req, res) => {
  res.send("ha entrado en el método de mochila");
});

module.exports = router;
