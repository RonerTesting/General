const http = require('http')
const PORT = 5000;

const {readFileSync} = require('fs')

const homePage =  readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    console.log('user hit the server');
    const url = req.url;
    if(url==='/'){
    // res.writeHead(200,{'content-type':'text/html'})
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page no found.</h1>')
        res.end()
    }
})

server.listen(PORT) 
