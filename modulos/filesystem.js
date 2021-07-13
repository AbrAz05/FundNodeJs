const fs = require('fs');

function leer(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  });
}

function escribir( ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function(err) {
    if(err){
      console.error('No se ha podido escribir', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  });
}

function borrar(ruta, callback) {
  fs.unlink(ruta, callback);
}

leer(__dirname + '/archivo.txt', console.log);
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo ', console.log)
borrar(__dirname + '/archivo1.txt', console.log);