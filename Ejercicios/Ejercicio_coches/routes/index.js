var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", (req, res) => {
  res.render("index");
});

/* 
// http://localhost:3000/index
router.get("/index", (req, res) => {
  res.render("index");
});



// http://localhost:3000/cars/allcars

router.get("/cars/allCars", (req, res) => {
  res.render("allCars");
});




// http://localhost:3000/cars/createCar
router.get("/cars/createCar", (req, res) => {
  res.render("createCar");
});
 */
module.exports = router;
