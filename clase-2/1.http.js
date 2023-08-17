const http = require("node:http");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola Mundo");
});

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
