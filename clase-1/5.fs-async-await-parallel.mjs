import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./lectura.txt", "utf-8"),
  readFile("./lectura2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("primer texto: ", text);
  console.log("segundo texto: ", text2);
});
