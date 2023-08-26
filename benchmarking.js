console.timeEnd( 'todo');
let suma = 0;
console.time('bucle');

for (let i =0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd( 'bucle');

function asinc() {
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })    
}

let suma2 = 0;
console.time('bucle 2');

for (let j =0; j < 10000; j++) {
    suma2 += 1;
}
console.timeEnd( 'bucle 2');

console.time('asincrono');
console.log('Empieza el proceso asincrono');
asinc()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd( 'todo' );

