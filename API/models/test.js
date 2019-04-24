'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = Schema ({
    nombre: String,
    dni: String,
})

module.exports = mongoose.model('Test', TestSchema)