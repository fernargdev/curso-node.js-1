const path = require("node:path");

// `./content/subfolder/test.txt`  <= Esta prohibido por el SO
// => unix /
// => windows \

// barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename("/tmp/secret/password.txt");
console.log(base);

const fileName = path.basename("/tmp/secret/password.txt", ".txt");
console.log(fileName);

const extension = path.extname('my.super.image.jpg')
console.log(extension);
