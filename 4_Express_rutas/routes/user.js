const express = require("express");
const router = express.Router();

//localhost:3000/user
router.get("/", (req, res) => {
  res.send("Hello user!");
});

module.exports = router;
