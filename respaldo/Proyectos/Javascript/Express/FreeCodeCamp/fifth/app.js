const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
//setupt static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./index.html'))

//     adding to static assets
//     SSR
//
// })
app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})
