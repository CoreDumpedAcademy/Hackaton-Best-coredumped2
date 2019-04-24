const express = require('express')
const api = express.Router()

const coche = require('./scoche')
const moto = require('./smoto')
const test = require('./test')

api.use('/test', test)
api.use('/coche', coche)
api.use('/moto', moto)

module.exports = api