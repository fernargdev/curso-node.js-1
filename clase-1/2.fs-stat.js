const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes de fs

const stats = fs.statSync('./lectura.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
);