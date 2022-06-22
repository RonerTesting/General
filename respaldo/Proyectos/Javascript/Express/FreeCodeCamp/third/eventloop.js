const {readfile, readFile} = require('fs');
console.log('started a first task');

readFile('../second/content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
    console.log('completed first tasl')
})
console.log('starting next task')

