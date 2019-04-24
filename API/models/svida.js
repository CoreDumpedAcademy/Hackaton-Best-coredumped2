'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SvidaSchema = Schema ({
    nombre: {pila: String, apellidos: String},
    dni: {type: String, unique: true},
    nacido: Date,
    fumador: Boolean
})

module.exports = mongoose.model('Svida', SvidaSchema)