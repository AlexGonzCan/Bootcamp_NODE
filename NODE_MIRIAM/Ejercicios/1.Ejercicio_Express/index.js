const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

// localhost:3000
app.get("/", (req, res) => {
  res.send("Hola, bienvenido a mi página web");
});

// localhost:3000/socraDog
app.get("/socraDog", (req, res) => {
  res.sendFile(__dirname + "/socraDog.html");
});
// localhost:3000/forty
app.get("/forty", (req, res) => {
  res.sendFile(__dirname + "/forty.html");
});
// localhost:3000/visualize
app.get("/visualize", (req, res) => {
  res.sendFile(__dirname + "/visualize.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
