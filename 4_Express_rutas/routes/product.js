const express = require("express");
const router = express.Router();

//localhost:3000/product
router.get("/", (req, res) => {
  res.send("Hello producto!");
});

//localhost:3000/product/mochila
router.get("/mochila", (req, res) => {
  res.send("ha entrado en el metodo de mochila!");
});

module.exports = router;
