const mongoose = require('mongoose');
//mongodb+srv://roner:mercado2@cluster0.2tepi.mongodb.net/test?retryWrites=true&w=majority
const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat:{
        type:Schema.ObjectId,
        ref:'Chat'
    },
    user:{
        type:Schema.ObjectId,
        ref:'User'
    },
    message:{
        type:String,
        required:true
    },
    date:Date
});

const model =  mongoose.model('Message',mySchema);
module.exports=model;

