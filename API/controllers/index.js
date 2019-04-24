function holaMundo(req, res){
    res.status(200).send({message: 'Hola mundo'})
}

module.exports = {
    holaMundo
}