var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// localhost:3000/users/perfil
router.get("/perfil", (req, res) => {
res.send("Este mi perfil")
})

module.exports = router;
