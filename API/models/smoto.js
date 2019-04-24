'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SmotoSchema = Schema ({
    nombre: {pila: String, apellidos: String},
    dni: {type: String, unique: true},
    matricula: String,
    vehiculo: {modelo: String, marca: String},
    anosCarnet: Number
})

module.exports = mongoose.model('Smoto', SmotoSchema)