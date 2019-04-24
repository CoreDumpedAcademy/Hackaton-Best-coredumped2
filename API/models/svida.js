'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SvidaSchema = Schema ({
    nombre: String,
    dni: {type: String, unique: true},
    nacido: String,
    fumador: Boolean,
    condiciones: String,
    hijos: Number,
    hereditarias: String
})

module.exports = mongoose.model('Svida', SvidaSchema)