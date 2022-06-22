const fs = require('fs');

let leer = (ruta,cb)=>{
    fs.readFile(ruta,(err,data)=>{
        cb(data.toString());
    })
}
let escribir = (ruta,contenido,cb)=>{
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error('No he podido escribido debido al error '+err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    })
}
let borrar = (ruta,cb)=>{
    fs.unlink(ruta,cb)
}
// borrar(__dirname+'/archivo1.txt',console.log);
// let texto= `Soy un archivo nuevo
// con varias lineas
// xd`;
// escribir(__dirname+'/archivo1.txt',texto,console.log)
// leer(__dirname+'/archivo.txt',console.log);
console.log(console);