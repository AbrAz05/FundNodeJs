// las funciones son elementos de primer nivel
function hola( nombre, micallback ) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    micallback(nombre);
  }, 1000);
}

function adios( nombre, otroCallback ) {
  setTimeout(function() {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000)
}

console.log('Iniciando proceso...');
hola('Abraham', function(nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso...');
  })
});

// hola('Abraham', function () {})
// adios('Abraham', function () {})