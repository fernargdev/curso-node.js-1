const fs = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression
(
  async () => {
  console.log("Leyendo el primer achivo...");
  const text = await fs.readFile("./lectura.txt", "utf-8");
  console.log("primer texto: ", text);

  console.log("Hacer cosas mientras lee el acrchivo...");
  console.log("----------------------------------");

  console.log("Leyendo el segundo achivo...");

  const text2 = await fs.readFile("./lectura2.txt", "utf-8");
  console.log("segundo texto: ", text2);

  console.log("----------------------------------");
 }
)();
