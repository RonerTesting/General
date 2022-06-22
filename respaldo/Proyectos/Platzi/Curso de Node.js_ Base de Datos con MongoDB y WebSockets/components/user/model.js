const mongoose = require('mongoose');
//mongodb+srv://roner:mercado2@cluster0.2tepi.mongodb.net/test?retryWrites=true&w=majority
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name:String,
});

const model =  mongoose.model('User',mySchema);
module.exports=model;

