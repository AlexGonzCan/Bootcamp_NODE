var express = require("express");
const connection = require("../config/db");
var router = express.Router();

const uploadImage = require("../middleware/uploadImage"); // IMG

// Ruta base: localhost:3000/cars

//muestra todos los coches en vista allCars.ejs
// localhost:3000/cars/allCars
router.get("/allCars", function (req, res, next) {
  connection.query("SELECT * FROM car", (error, result) => {
    if (error) throw error;
    console.log(result);

    res.render("allCars", { result });
  });
});

//renderizaa la vista createCar.ejs
// localhost:3000/cars/r
router.get("/createCar", function (req, res, next) {
  res.render("createCar");
});

// Formulario para crear coches
// localhost:3000/cars/createCar

router.post("/createCar", uploadImage(), (req, res) => {
  let { brand, model, color } = req.body;
  let img = req.file.filename; // IMG
  connection.query(
    `INSERT INTO car (brand, model, color, img) VALUE ("${brand}", "${model}", "${color}", "${img}")`,
    (error, result) => {
      if (error) throw error;
      console.log(result);
      //  res.send("car creado!");
      res.redirect("/cars/allCars");
    }
  );
});

// localhost:3000/cars/deleteCar/:car_id
router.get("/deleteCar/:car_id", (req, res) => {
  let car_id = req.params.car_id;
  let sql = `DELETE FROM car WHERE car_id = ${car_id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    res.redirect("/cars/allCars");
  });
});

//METODO PARA MISTRAR UN PERFIL DE COCHE
// localhost:3000/cars/perfil/:car_id
router.get("/perfil/:car_id", (req, res) => {
  let car_id = req.params.car_id;
  let sql = `SELECT * FROM car WHERE car_id = ${car_id}`;
  connection.query(sql, (error, resultCar) => {
    if (error) throw error;
    res.render("perfil", { resultCar });
  });
});

module.exports = router;
