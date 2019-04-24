'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SmotoSchema = Schema ({
    nombre: String,
    dni: {type: String, unique: true},
    matricula: String,
    vehiculo: String,
    anosCarnet: Number
})

module.exports = mongoose.model('Smoto', SmotoSchema)