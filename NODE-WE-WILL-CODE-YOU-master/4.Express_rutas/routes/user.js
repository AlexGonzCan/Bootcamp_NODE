const express = require("express");
const router = express.Router();

// Ruta raíz: localhost:3000/user

// localhost:3000/user
router.get("/", (req, res) => {
  res.send("Hola usuario");
});

module.exports = router;
