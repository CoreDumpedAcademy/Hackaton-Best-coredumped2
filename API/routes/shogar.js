const router = require('express').Router()
const Shogar = require('../models/shogar')
const ShogarController = require('../controllers/shogarController')

router.get('/', ShogarController.getEverything)
router.get('/:dni', ShogarController.getByDNI)
router.post('/', ShogarController.crearPoliza)
router.put('/:dni', ShogarController.updateByDNI)
router.delete('/:dni', ShogarController.borrarPoliza)


module.exports = router