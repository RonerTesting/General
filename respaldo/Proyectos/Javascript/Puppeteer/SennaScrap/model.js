var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const SenaCourse = new Schema({
    nombre:String,
    tipo:String,
    modalidad:String,
    ciudad:String,
    lugar:String,
    fechaInicio:String,
    nivelRequerido:String,
    URL:String,
});

module.exports = mongoose.model('SenaCourse',SenaCourse)