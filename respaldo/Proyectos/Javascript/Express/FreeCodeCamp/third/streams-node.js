const {createReadStream} = require('fs');

const stream = createReadStream('./data.txt',{highWaterMark:200000});

/*
Streams on node by default can get 64kb oof data in chunks
last buffer - remainder
highWaterMark - Control size <- change 
const stream = createReadStream('./data.txt',{highWaterMark:90000})
const stream = createReadStream('./data.txt',{encoding:'utf8'})
*/

stream.on('data',(result)=>{
    console.log(result.toString());
})