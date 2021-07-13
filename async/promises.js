function hola( nombre ) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      res(nombre);
    }, 1000);
  });
}

function hablar( nombre ){
  return new Promise((res, rej) => {
    setTimeout(function() {
    console.log('Bla bla bla');
    // res(nombre);
    rej('Hay un error');
    }, 1000);
  })
}

function adios( nombre ) {
  return new Promise((res, rej) => {
    setTimeout(function() {
      console.log('Adios, ' + nombre);
      res();
    }, 1000);
  })
}

function terminar() {
  console.log('Terminado el proceso..');
}

// ---
console.log('Iniciando el proceso..');
hola('Abraham')
  // .then((nombre) => {
  //   return adios(nombre);
  // })
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((() => {console.log('Terminando el proceso...')}))
  .catch(error => {
    console.log('Ha habido un error');
    console.log(error);
  });
  