const mongoose = require('mongoose');
//mongodb+srv://roner:mercado2@cluster0.2tepi.mongodb.net/test?retryWrites=true&w=majority
const Schema = mongoose.Schema;

const mySchema = new Schema({
    users:[
        {type:Schema.ObjectId,
        ref:'User'}
    ],
});

const model =  mongoose.model('Chat',mySchema);
module.exports=model;

