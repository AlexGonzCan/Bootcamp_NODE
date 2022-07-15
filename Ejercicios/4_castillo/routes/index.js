var express = require("express");
const connection = require("../config/db"); // BD
const uploadImage = require("../middleware/uploadImage"); //uploadImage(), añadir
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

// Ruta base:  localhost:3000/

// seccion todos los usuarios que se han creado
// localhost:3000/allUsers
router.get("/allUsers", (req, res) => {
  connection.query("SELECT * FROM users", (error, result_allUsers) => {
    if (error) throw error;
    console.log(result_allUsers); //ver los usuarios creados
    res.render("allUsers", { result_allUsers }); //view allUsers.ejs
  });
});

// Seccion Perfil de cada usuario
// localhost:3000/user/:user_id
router.get("/user/:user_id", (req, res) => {
  let user_id = req.params.user_id;
  let sql = `SELECT * FROM users WHERE user_id = ${user_id}`;
  connection.query(sql, (error, result_user) => {
    if (error) throw error;
    res.render("user", { result_user }); //view user.ejs
  });
});

//Seccion formulario crear usuario
// localhost:3000/formUser
router.post("/formUser", uploadImage(), (req, res) => {
  let { name, email, phone, description } = req.body;
  let img = req.file.filename; // img
  connection.query(
    `INSERT INTO users (name, email, phone, img, description) VALUE ("${name}","${email}","${phone}","${img}","${description}")`,
    (error, result_form) => {
      if (error) throw error;
      console.log(result_form);
      res.render("formUser", { mensaje: "Usuario creado!" }); //view  formUser.ejs
    }
  );
});

//mostrar formulario
// localhost:3000/formUser
router.get("/formUser", (req, res) => {
  res.render("formUser");
});

module.exports = router;
