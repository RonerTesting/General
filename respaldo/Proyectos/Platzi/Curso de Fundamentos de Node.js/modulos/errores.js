otrafuncion = ()=>{
     serompe();
}
let serompe=()=>{
        return 3+z;
}
let funcionSeRompeAsincrona=(cb)=>{
    setTimeout(() => {
        try {
            return 3+z;
        } catch (error) {
            console.error('error en mi funcion asincrona');
            cb(error.message)
        }

    }, 1000);
}
try {
    // otrafuncion();
    funcionSeRompeAsincrona(function(err){
        console.log(err)
    });
} catch (error) {
    console.error('Vaya, algo se ha roto');
    console.log(error);
    console.log('Pero no pasa nada, lo hemos capturado');
}