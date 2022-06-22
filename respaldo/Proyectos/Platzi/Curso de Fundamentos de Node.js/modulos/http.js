 const http = require('http');

 http.createServer(router).listen(3000);
 function router (req,res){
    //
   console.log("nueva peticion");
   console.log(req.url);
   switch(req.url){
       case '/hola':
           res.write('hola que tal');
           res.end();
           break;
        default:
            res.write('Error 404: no se lo que quieres')
        break
   }
   //escribir respuesta al usuario
//    res.writeHead(201,{'Content-Type':'text/plain'})
//    res.write('hola ya se usar http de nodejs')

   res.end();
}
 console.log("Escuchando en el puerto 3000");