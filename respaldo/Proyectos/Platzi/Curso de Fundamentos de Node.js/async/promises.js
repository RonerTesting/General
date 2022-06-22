function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      // console.log('Estoy siendo asincrono');
      resolve(nombre);
    }, 1000);
  });
}
function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("bla bla bla bla");
        resolve(nombre);
      }, 1000)    
  })
}
function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}
//--
console.log("Iniciando el proceso");
hola("Roner")
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then((nombre) => {
  console.log(`terminado el proceso `);
});
