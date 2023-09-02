// PRIMERA API
const http = require("node:http");

// commonJS => modulos clasicos de node
const dittoJSON = require("./pokemon/ditto.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          // ecuchar el evento data, empiezan a llegar trozos de data(chunk)
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          // llego todos los chunk(data completa), por lo que finalizo el evento
          req.on("end", () => {
            const data = JSON.parse(body);
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });

            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("server listening on port http://localhost:3000");
});
