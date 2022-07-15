const express = require("express");
const connection = require("../config/db");
const router = express.Router();

// Ruta base: localhost:3000/cars

// localhost:3000/cars
router.get("/", (req, res) => {
  let sql = `SELECT * FROM car`;

  connection.query(sql, (error, resultado) => {
    if (error) throw error;
    res.render("allCars", { resultado });
  });
});

// localhost:3000/cars/carForm
router.get("/carForm", (req, res) => {
  res.render("createCar", { mensaje: "" });
});

// localhost:3000/cars
router.post("/", (req, res) => {
  let { brand, model, color } = req.body;

  let sql = `INSERT INTO car (brand, model, color) VALUES ("${brand}", "${model}", "${color}")`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    // res.redirect("/cars");
    // res.redirect("/cars/carForm");
    res.render("createCar", { mensaje: "coche creado correctamente" });
  });
});

// localhost:3000/cars/deleteCar/:car_id
router.get("/deleteCar/:car_id", (req, res) => {
  let car_id = req.params.car_id;
  let sql = `DELETE FROM car WHERE car_id = ${car_id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    res.redirect("/cars");
  });
});
module.exports = router;
