var express = require("express");
const connection = require("../config/db");
var router = express.Router();
const uploadImage = require("../middleware/uploadimmage");

// Ruta base: localhost:3000/users

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// localhost:3000/users/allUsers
router.get("/allUsers", (req, res) => {
  connection.query("SELECT * FROM usuario", (error, result) => {
    if (error) throw error;
    console.log(result);

    res.render("allUsers", { result }); // muestro el views allUsers.ejs en el navegador
  });
});

// localhost:3000/users
router.post("/", , (req, res) => {
  let { name, surname, age } = req.body;
  connection.query(
    `INSERT INTO usuario (name, surname, age) VALUE ("${name}", "${surname}", ${age})`,
    (error, result) => {
      if (error) throw error;
      console.log(result);
      // res.send("usuario creado!");
      res.redirect("/users/allUsers");
    }
  );
});

// metodo que elimina con el boton
// localhost:3000/users/deleteUser/:user_id
router.get("/deleteUser/:user_id", (req, res) => {
  let user_id = req.params.user_id;
  let sql = `DELETE FROM usuario WHERE user_id = ${user_id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    res.redirect("/users/allUsers");
  });
});

//localhost:3000/oneUser/:user_id
router.get("/oneUser", (req, res) => {
  let user_id = req.params.user_id;
  let sql = `SELECT * FROM usuario WHERE user_id = ${user_id}`;
  connection.query(sq,(error, result))
  res.render("OneUsers");
});

module.exports = router;
