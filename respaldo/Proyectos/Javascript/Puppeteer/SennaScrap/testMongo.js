const mongoose = require('mongoose');

let conection = mongoose.connect('mongodb://localhost:27017/test')
.then(res=>{
    // console.log(res)
    mongoose.disconnect();
})
.catch(err=>{
    console.log(err)
})
// Promise.all([conection]).then(value=>{
//     console.log('test')
//     mongoose.disconnect();
// })
