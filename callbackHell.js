function hola(nombre, miCallback) {
    //console.log('Hola, soy una funcion asincrona');
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla Bla Bla..');
        callbackHablar();
    }, 1000);

}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);

}

function conversacion(nombre, veces, callback) {
    if (veces >= 0){
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);

    }
    
}

//...Main Function

console.log('Iniciando proceso...');
hola('Hector', function (nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');

    });
});

// hola('Hector', function (nombre) {
//     hablar(function () {
//         adios(nombre, function() {
//             console.log('Terminando proceso...');

//         });    
//     });    
// });

