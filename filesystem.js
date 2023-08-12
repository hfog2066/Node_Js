const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());    // Leido
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

//leer( __dirname + '/archivo1.txt', console.log )
//escribir(__dirname + '/archivo1.txt', 'Hello World! Soy un archivo nuevo.', console.log)
borrar(__dirname + '/archivo1.txt', console.log);

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if ( err ) {
            console.error( 'No he podido escribirlo', err);
        }else {
            console.log('Se ha escrito correctamente');
        }

    });
}