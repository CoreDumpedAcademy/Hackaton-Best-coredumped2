const express = require('express')
const api = express.Router()

const Hello = require('../controllers/index')
const test = require('./test')

api.use('/test', test)
api.get('/', Hello.holaMundo)

module.exports = api