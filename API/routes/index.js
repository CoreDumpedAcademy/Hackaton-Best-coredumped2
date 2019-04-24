const express = require('express')
const api = express.Router()

const coche = require('./scoche')
const test = require('./test')

api.use('/test', test)
api.use('/coche', coche)

module.exports = api