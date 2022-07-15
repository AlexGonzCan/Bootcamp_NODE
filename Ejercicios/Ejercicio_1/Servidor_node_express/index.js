const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

//http://localhost:3000/
app.get("/", (req, res) => {
  res.send("hola, bienvenido a mi página web");
});

//localhost:3000/home
http: app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//localhost:3000/socradog
http: app.get("/socradog", (req, res) => {
  res.sendFile(__dirname + "/socradog.html");
});

//localhost:3000/forty
http: app.get("/forty", (req, res) => {
  res.sendFile(__dirname + "/forty.html");
});

//localhost:3000/visualice
http: app.get("/visualice", (req, res) => {
  res.sendFile(__dirname + "/visualice.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
