const fs = require('fs');
const stream = require('stream');
const util = require('util'); 

let data = ' ';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', function (chunk) {
//         data += chunk;
//         //console.log(chunk);
// });

// readableStream.on('end', function() {
//     console.log(data);
// })

// process.stdout.write('Hello,')
// process.stdout.write(' what`s')
// process.stdout.write(' up!')


const Transform = stream.Transform;

function Mayusculas() {
    Transform.call(this);    
}
util.inherits(Mayusculas, Transform);

Mayusculas.prototype._transform = function (chunk, codif, cb) {
    chunkMayusculas = chunk.toString().toUpperCase();
    this.push(chunkMayusculas);
    cb();
}

let mayusculas = new Mayusculas();

readableStream
    .pipe(mayusculas)
    .pipe(process.stdout);