var express = require("express");
const connection = require("../config/db");
const uploadImage = require("../middleware/uploadImage");
var router = express.Router();

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
    res.render("allUsers", { result });
  });
});

// localhost:3000/users
router.post("/", uploadImage(), (req, res) => {
  let { name, surname, edad } = req.body;
  let img = req.file.filename;
  console.log(img);
  connection.query(
    `INSERT INTO usuario (name, surname, age, img) VALUES ( "${name}", "${surname}", ${edad}, "${img}")`,
    (error, result) => {
      if (error) throw error;
      console.log(result);
      res.redirect("/users/allUsers");
    }
  );
});

// localhost:3000/users/deleteUser/:user_id
router.get("/deleteUser/:user_id", (req, res) => {
  let user_id = req.params.user_id;
  let sql = `DELETE FROM usuario WHERE user_id = ${user_id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    res.redirect("/users/allUsers");
  });
});

// localhost:3000/users/oneUser/:user_id
router.get("/oneUser/:user_id", (req, res) => {
  let user_id = req.params.user_id;
  let sql = `SELECT * FROM usuario WHERE user_id = ${user_id}`;
  connection.query(sql, (error, resultUser) => {
    if (error) throw error;
    console.log(resultUser);

    res.render("oneUser", { resultUser });
  });
});

module.exports = router;
