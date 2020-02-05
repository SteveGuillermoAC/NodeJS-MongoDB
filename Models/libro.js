var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var libroSchema = new Schema({
    nombre_libro:{type:String,trim:true},
    genero:{type:String,trim:true},
    autor:{type:String,trim:true},
    pais :{type:String,trim:true},
    idioma :{type:String,trim:true},

   num1:{type:Number,trim:true},
   num2:{type:Number,trim:true},
   respuesta:{type:String,trim:true}

})
var libro = mongoose.model('libro',libroSchema);
module.exports=libro;
