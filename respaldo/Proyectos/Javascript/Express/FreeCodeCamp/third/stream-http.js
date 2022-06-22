const http = require('http');
const fs = require('fs');
const PORT = 5000;
http.createServer((req,res)=>{
    // const text = fs.readFileSync('./data.txt','utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./data.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })

}).listen(PORT)