function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`);
    // console.log('Estoy siendo asincrono');
    miCallback(nombre);
  }, 1000);
}
function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("bla bla bla bla");
    callbackHablar();
  }, 1000);
}
function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`adios ${nombre}`);
    otroCallback(nombre);
  }, 1000);
}
function conversacion (nombre,veces,callback){
    if(veces>0){
        hablar(function(){
            conversacion(nombre,--veces,callback);
        })
    }else{
        adios(nombre,callback);
    }
}

//--
console.log("Inicio");
hola('roner',function(nombre){
    conversacion(nombre,1,function(){
        console.log('proceso terminado');
    })
})
// hola("roner", function (nombre) {
//     adios(nombre,function () {
//         console.log('terminamos');
//     });
// });
// hola("roner", function () {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         hablar(function () {
//           adios("roner", function () {
//             console.log("Terminando proceso...");
//           });
//         });
//       });
//     });
//   });
// });
