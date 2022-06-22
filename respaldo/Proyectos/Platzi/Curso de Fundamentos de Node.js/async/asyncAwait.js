async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      // console.log('Estoy siendo asincrono');
      resolve(nombre);
    }, 1000);
  });
}
async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("bla bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}
async function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

console.log('empezamos el proceso');
async function main() {
  let nombre = await hola('roner');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('termina el proceso');
  
}

main();