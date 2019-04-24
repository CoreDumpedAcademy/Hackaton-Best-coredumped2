const express = require('express')
const api = express.Router()

const coche = require('./scoche')
const moto = require('./smoto')
const test = require('./test')
const vida = require('./svida')
const hogar = require('./hogar')

api.use('/test', test)
api.use('/coche', coche)
api.use('/moto', moto)
api.use('/vida', vida)
api.use('/hogar', hogar)

module.exports = api