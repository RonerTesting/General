const http = require('http');
const PORT = '3000'
const server = http.createServer((req,res)=>{
    // console.log(req);
    console.log('req event');
    if(req.url ==='/'){
        res.end('Welcome to our home page xd')
    }
    else if(req.url =='/about'){
        res.end(`Here's a short history`)

    }else {
        res.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page you are looking for </p>
        <a href='/'>back home</a>
        `);
    }
    // res.write('Welcome to our home page xd');
})

server.listen(PORT,()=>{
    console.log(`listening ${PORT}`);
});