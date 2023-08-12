function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1000);
    });    
}


function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla Bla Bla...');
            //resolve(nombre);
            reject('Hay un error');
        }, 1000);
    })
}



function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}


// --- Main Function

console.log('Iniciando el proceso...');
hola('Hector')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso...');
    })


    .catch(error => {
        console.error('Ha habido un error: ');
        console.error(error);
    })

