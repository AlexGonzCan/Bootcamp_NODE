var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost", //localhost:3000 por defecto
  user: "root",
  password: "root",
  database: "", //nombre de la base de datos
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("Conexion Correcta!");
});

module.exports = connection;
