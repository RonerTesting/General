const fs = require('fs');

const stream = require('stream');
const util = require('util');

let data = '';

let readeableStream = fs.createReadStream(__dirname+'/input.txt');
readeableStream.setEncoding('UTF8');
// readeableStream.on('data',(chunk)=>{
//     data+=chunk.toString();
// });

// readeableStream.on('end',()=>{
//     console.log(data);
// });

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transfrom = stream.Transform;

let Mayus = ()=>{
    Transfrom.call(this);
}
// util.inherits(Mayus,Transfrom);
// Mayus.prototype._transform=funciton(chunk,dif,cb){
//         chunkMayus=chunk.toString().toUpperCase();
//         this.push(chunkMayus):
//         cb()
// }
// let mayus = new Mayus();
// readeableStream
// .pipe(mayus)
// .pipe(process.stdout);
