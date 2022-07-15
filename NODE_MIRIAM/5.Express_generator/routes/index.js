var express = require("express");
var router = express.Router();

// Ruta raíz: localhost:3000

// localhost:3000
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
