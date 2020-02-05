var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb+srv://SteveGuillermoAC:admin12345@cluster0-10ofe.mongodb.net/biblioteca?retryWrites=true&w=majority');


mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a mongodb')
})

module.exports=connection;
