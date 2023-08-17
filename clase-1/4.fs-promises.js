const fs = require("node:fs/promises");
const { promisify } = require("node:util");

const readFilePromise = promisify(fs.readFile);

console.log("Leyendo el primer achivo...");
// Promesa
fs.readFile("./lectura.txt", "utf-8").then((text) => {
  console.log("primer texto: ", text);
});
console.log("Hacer cosas mientras lee el acrchivo...");
console.log("----------------------------------");

console.log("Leyendo el segundo achivo...");
// Esta es una variante para modulos que no cuentan con promesas nativamente
fs.readFilePromise("./lectura2.txt", "utf-8").then((text) => {
  console.log("segundo texto: ", text);
});
console.log("----------------------------------");
