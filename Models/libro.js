var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var libroSchema = new Schema({
    nombre_libro:{type:String,trim:true},
    genero:{type:String,trim:true},

})
var libro = mongoose.model('libro',libroSchema);
module.exports=libro;


