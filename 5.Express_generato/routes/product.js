var express = require('express');
var router = express.Router();


//Ruta base localhost:3000/product

// localhost:3000/product
router.get("/", (req, res) => { //recoge
  
    res.render('formProduct');
  });


  // localhost:3000/product
router.post("/", (req, res) => {
    let {nombre, categoria} = req.body;

    res.send(`Nombre: ${nombre} Categoria: ${categoria} `)
    
});

module.exports = router;
