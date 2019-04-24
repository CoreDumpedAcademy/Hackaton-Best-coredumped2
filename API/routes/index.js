const express = require('express')
const api = express.Router()
const Hello = require('../controllers/index')

api.get('/', Hello.holaMundo)

module.exports = api