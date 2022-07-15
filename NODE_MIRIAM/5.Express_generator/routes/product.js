const express = require("express");
const router = express.Router();
// Ruta base: localhost:3000/product

// localhost:3000/product
router.get("/", (req, res) => {
  res.render("formProduct");
});

// localhost:3000/product
router.post("/", (req, res) => {
  let { name, category } = req.body;
  res.send(`Nombre del producto: ${name}, categoría del producto: ${category}`);
});
module.exports = router;
