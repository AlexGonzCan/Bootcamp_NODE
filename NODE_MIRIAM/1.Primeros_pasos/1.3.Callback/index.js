// Un callback es una función que se pasa como parámetro de otra función
// function haceAlgo(callback, valor) {
//   console.log("ha entrado en la función haceAlgo");
//   callback(valor);
// }
// function haceAlgo(callback) {
//   console.log("ha entrado en la función haceAlgo");
//   callback("carlos");
// }
function haceAlgo(callback) {
  console.log("ha entrado en la función haceAlgo");
  callback("carlos");
}
function saludar(nombre) {
  console.log(`Buenos días ${nombre}`);
}

saludar("miriam");
haceAlgo(saludar);
haceAlgo();
