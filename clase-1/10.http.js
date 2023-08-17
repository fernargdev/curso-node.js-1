const http = require("node:http"); // Protocolo HTTP
const { finAvailablePort } = require("./11.free-port");

// console.log(process.env); // prueba de las env

const desiredPort = process.env.PORT ?? 3000; // <= Me da error las env

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola Mundo");
});

finAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});

// server.listen(0, () => {
//   console.log(
//     `server listening on port http://localhost:${server.address().port}`
//   );
// });
