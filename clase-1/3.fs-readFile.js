const fs = require("node:fs");

console.log("Leyendo el primer achivo...");
fs.readFile("./lectura.txt", "utf-8", (err, text) => {  // <= ejecutas este callback
  console.log(text);
});
console.log("Hacer cosas mientras lee el acrchivo...");
console.log("----------------------------------");


console.log("Leyendo el segundo achivo...");
fs.readFile("./lectura2.txt", "utf-8", (err,text)=>{
    console.log(text)
});
console.log("----------------------------------");
