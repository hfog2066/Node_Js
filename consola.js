console.log('Algo')

console.info('Algo mas')  

console.warn('Algo mas')  

var tabla = [
    {
        a: 1,
        b: 'Z'
    },

    {
        a: 2,
        b: 'Otra'
    }
]

console.log(tabla);

console.table(tabla);

console.group('conversacion');
console.log('Hola');
console.group('Bla');
console.log('Bla, Bla, Bla');
console.log('Bla, Bla, Bla');
console.log('Bla, Bla, Bla');
console.groupEnd('Bla')
console.log('Adios');
console.groupEnd('conversacion');
console.log('Otra cosa de otra funcion');

function funcion1() {
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    console.log('Esto tambien');
    funcion2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('funcion 1');
}

function funcion2() {
    console.group('funcion 2');
    console.log('Esto es de la funcion 2');
    console.log('Esto tambien');
    console.log('Esto tambien');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
funcion1();
//funcion2();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');