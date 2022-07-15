var express = require("express");
var router = express.Router();
// Ruta raíz = localhost:3000/users

// localhost:3000/users/
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// localhost:3000/users/perfil
router.get("/perfil", (req, res) => {
  res.send("Este es mi perfil");
});

module.exports = router;
