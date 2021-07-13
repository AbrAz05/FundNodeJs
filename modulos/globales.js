// Modulos globales que ya son incluidos en node js
let i = 0;
let intervalo = setInterval(() => {
  console.log('Hola');
  if(i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000)

setImmediate(() => {
  console.log('Hola indmediato');
})

// console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = 'lo que quiera';
console.log(miVariable);