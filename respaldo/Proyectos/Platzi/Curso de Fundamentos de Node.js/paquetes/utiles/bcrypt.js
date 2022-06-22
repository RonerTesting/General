const bcrypt = require('bcrypt');

const password = '1234Segura! ';

bcrypt.hash(password,12,(err,hash)=>{
    console.log(hash);
    bcrypt.compare(password,hash,function(err,res){
        console.log(res);
    })
});
