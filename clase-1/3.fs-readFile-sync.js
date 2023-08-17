const fs = require("node:fs");

console.log("Leyendo el primer achivo...");

const text = fs.readFileSync("./lectura.txt", "utf-8") 
console.log(text);

console.log("Hacer cosas mientras lee el acrchivo...");
console.log("----------------------------------");


console.log("Leyendo el segundo achivo...");

const text2 = fs.readFileSync("./lectura2.txt", "utf-8")
console.log(text2)

console.log("----------------------------------");
