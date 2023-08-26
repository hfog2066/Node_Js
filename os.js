const os = require( 'os' );

//console.log(os.arch());   // Ver arquitectura de procesador

//console.log(os.platform());  // Version de windows

//console.log(os.cpus());  // Ver porcesadores 

//console.log(os.cpus().length);  // Ver cantidad de procesos

//console.log(os.constants);  // señales del sistema

const SIZE = 1024;

function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(os.freemem());   // Ver memoria libre

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log(os.homedir());    // Ver directorio local

console.log(os.tmpdir());     // Ver directorio temporal

console.log(os.hostname());

console.log(os.networkInterfaces());  // ver interfaces de red

