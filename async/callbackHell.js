// las funciones son elementos de primer nivel
function hola( nombre, micallback ) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    micallback(nombre);
  }, 1000);
}

function hablar( callbackHablar ){
  setTimeout(function() {
    console.log('Bla bla bla');
    callbackHablar();
  }, 1000);
}

function adios( nombre, otroCallback ) {
  setTimeout(function() {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  // Recursividad
  if(veces > 0) {
    hablar( function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// ---

console.log('Iniciando proceso...');
hola('Abraham', function(nombre) {
  conversacion(nombre, 3 , function() {
    console.log('Proceso Terminado');
  });
})
// hola('Abraham', function (nombre) {
//   adios(nombre, function() {
//     console.log('Terminamos');
//   })
// })
// hola('Abraham', function(nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         console.log('Terminando proceso...');
//         adios(nombre, function() {
//         });
//       });
//     });
//   });
// });