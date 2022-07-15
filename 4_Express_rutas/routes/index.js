const express = require("express");
const router = express.Router();

//localhost:3000/admin/params/:color
router.get("/", (req, res) => {
  res.send(`Estas en el index Home`);
});

module.exports = router;
