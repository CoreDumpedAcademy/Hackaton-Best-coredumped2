var Test = require('../models/test');

exports.testGetData = function(req, res) {
    Test.find({}, (err, tests) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if(!tests) return res.status(404).send({message: `No existe`});

        res.status(200).send({tests});
    })
}

exports.testCreate = function(req, res) {
    console.log('POST api/user');
    console.log(req.body);

    let test = new Test();
    test.nombre = req.body.nombre;
    test.dni = req.body.dni;


    test.save((err, testStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en la base de datos: ${err} `});

        res.status(200).send({test: testStored});
    });
}