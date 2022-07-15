// Requerimos la librería http, que ya viene integrada cuando descargamos NodeJS y guardamos su funcionalidad en la constante htttp
const http = require("http");

// El host es la dirección de entrada de peticiones en mi servidor
const hostname = "127.0.0.1"; //localhost
const port = 3000; //3001, 8080

// configuramos la respuesta que vamos a dar a cada petición entrante en mi servidor

let config = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola clase");
};
const server = http.createServer(config);

// Mantenemos el servidor levantado escuchando las peticiones entrantes que se hagan.
server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
