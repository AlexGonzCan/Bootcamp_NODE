const express = require("express");
const router = express.Router();
const path = require("path");
// ruta raíz del archivo: localhost:3000
router.get("/", (req, res) => {
  res.send("Estás en home");
});

router.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "/../index.html"));
});
module.exports = router;
