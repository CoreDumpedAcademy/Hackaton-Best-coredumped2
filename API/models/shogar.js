'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShogarSchema = Schema ({
    nombre: {pila: String, apellidos: String},
    dni: {type: String, unique: true},
    tamano: Number,
    
})

module.exports = mongoose.model('Shogar', ShogarSchema)