import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Información del sistema operativo:');
console.log('----------------------------------');

console.log('Nombre del sistema operativo => ', platform());
console.log('Version del sistema operativo => ', release());
console.log('Arquitectura del sistema operativo => ', arch());
console.log('CPUs => ', cpus()); // <= vamos a poder escalar procesos en Node
console.log('Memoria Libre =>', freemem() / 1024 / 1024);
console.log('Memoria Total => ', totalmem() / 1024 / 1024);
console.log('Uptime =>', uptime() / 60 / 60);