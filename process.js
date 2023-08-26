//const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('Hector, el proceso termino');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
})

setTimeout(() => {
    console.log('Esto se va a ver ');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error(' Olvidamos capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones ');
    }, 0);
});

funcionQueNoExiste;

console.log('Si el error no se recoje, no sale');




//process.on('uncaughtRejection')