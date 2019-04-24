'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShogarSchema = Schema ({
    nombre: String,
    dni: {type: String, unique: true},
    ocupantes: Number,
    tamano: Number,
    valor : Number,
    objetosValor: String,
})

module.exports = mongoose.model('Shogar', ShogarSchema)