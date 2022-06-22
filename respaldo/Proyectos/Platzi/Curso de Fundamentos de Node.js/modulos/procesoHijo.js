const { exec,spawn } = require('child_process');
// const exec  = require('child_process').exec;

// exec('node modulos/errores.js',(err,stdout,stderr)=>{
//     if (err) {
//         console.error(err);
//     }
//     console.log(stdout);
// })

let proceso = spawn('ls',['-la']);
console.log(proceso.pid)
console.log(proceso.connected)
proceso.stdout.on('data',(dato)=>{
    console.log('¿esta muerto?');
    console.log(dato.toString());
})
proceso.on('exit',()=>{
    console.log('El proceso ha terminado');
    console.log(proceso.killed);
})