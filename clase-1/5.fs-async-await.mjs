import { readFile } from "node:fs/promises";

console.log("Leyendo el primer achivo...");
const text = await readFile("./lectura.txt", "utf-8");
console.log("primer texto: ", text);

console.log("Hacer cosas mientras lee el acrchivo...");
console.log("----------------------------------");

console.log("Leyendo el segundo achivo...");

const text2 = await readFile("./lectura2.txt", "utf-8");
console.log("segundo texto: ", text2);

console.log("----------------------------------");
