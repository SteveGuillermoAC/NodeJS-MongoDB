var libro = require('../Models/libro.js'),
    express = require('express'),
    router = express.Router();

router.get('/obtener', (req, res) => {
    libro.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })

}).post('/crear', (req, res) => {
    var body = req.body;
    libro.insertMany({
       nombre_libro : body.nombre_libro,
              genero: body.genero,
              autor :body.autor,
              pais  :body.pais,
              idioma:body.idioma
    }, (err, rest) => {
        if (err) {

            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/editar', (req, res) => {
    var body = req.body;
    libro.update({nombre_libro: body.nombre_libro},
        {
            $set: {
              nombre_libro : body.nombre_libro,
                    genero : body.genero,
                    autor :body.autor,
                    pais  :body.pais,
                    idioma:body.idioma
            }
        }, (err, rest) => {
            if (err) {
                console.error(err)
                throw err;
            }
            res.status(200).json(rest)
        })
}).post("/suma", (req,res)=>{

    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    respuesta=num1+num2;
    res.status(200).json(respuesta);

}).post("/mayor", (req,res)=>{

    
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    if (num1>num2){
        res.status(200).json(num1);
        
    }
    else{
        res.status(200).json(num2);

    }
}).post("/primo", (req,res)=>{
    const num1 = parseInt(req.body.num1);

   //if(num1%1==1 && num1%num1==1){
     
    for ( num1 = 2; num1 <= 100; num1++) {
        if (num1 % 2 == 1 ) {
            console.log("es primo")
            break;
        }else if(num1%=0) 
         {
            Console.log("NO es primo")
        }
    }

})
module.exports = router;
