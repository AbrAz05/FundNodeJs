async function hola( nombre ) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      res(nombre);
    }, 1000);
  });
}

async function hablar( nombre ){
  return new Promise((res, rej) => {
    setTimeout(function() {
    console.log('Bla bla bla');
    res(nombre);
    // rej('Hay un error');
    }, 1000);
  })
}

async function adios( nombre ) {
  return new Promise((res, rej) => {
    setTimeout(function() {
      console.log('Adios, ' + nombre);
      res();
    }, 1000);
  })
}

async function main() {
  
  const nombre  = await hola('Abraham');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminando proceso...');
}
console.log('Empezando proceso...');
main();
console.log('Va a ser la segunda instruccion');