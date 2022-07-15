const express = require("express");
const router = express.Router();
// ruta raíz del archivo: localhost:3000
router.get("/", (req, res) => {
  res.send("Estás en home");
});
module.exports = router;
