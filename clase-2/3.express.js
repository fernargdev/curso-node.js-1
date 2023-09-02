const express = require("express");
const app = express();

const ditto = require("./pokemon/ditto.json");

// const PORT = process.env.PORT ?? 3000;  // problemas con las env
const PORT = 3000;

app.disable("x-powered-by");

// forma nativa
app.use(express.json());

// // esta seria una forma de hacerlo pero
// // esto ya viene de forma nativa en Express.js
// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   // aqui solo llega req POST con content-type === application/json
//   let body = "";

//   // ecuchar el evento data
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   // finalizo el evento
//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();

//     // mutar la req y meter la info en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
  // aqui con req.body podriamos guardar en bbdd
  res.status(201).json(req.body);
});

// la ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
