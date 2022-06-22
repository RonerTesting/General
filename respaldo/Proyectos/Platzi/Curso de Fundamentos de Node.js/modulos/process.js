console.log(process);

process.on('beforeExit',()=>{
    console.log('Esta por terminar')
})
process.on('exit',()=>{
    console.log('El proceso acabo')
})

process.on('uncaughtException',(err,origin)=>{
    console.log('Se nos a olvidado capturar un error');
    console.log(err.message);
})
process.on('uncaughtException')