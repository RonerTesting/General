function hola(nombre,miCallback){
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        // console.log('Estoy siendo asincrono');
        miCallback();
    }, 1000);
}
function adios(nombre,otroCallback){
    setTimeout(() => {
        console.log(`adios ${nombre}`);
        otroCallback();
    }, 1000);
}
console.log("Inicio");
hola('roner',function(){
    adios('roner',function(){
        console.log('Terminando proceso...');
    })
});