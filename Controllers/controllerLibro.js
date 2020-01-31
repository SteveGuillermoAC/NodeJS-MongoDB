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

            }
        }, (err, rest) => {
            if (err) {
                console.error(err)
                throw err;
            }
            res.status(200).json(rest)
        })
})


module.exports = router;
