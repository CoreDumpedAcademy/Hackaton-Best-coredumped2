const router = require('express').Router()
const Scoche = require('../models/scoche')
const ScocheController = require('../controllers/scocheController')

router.get('/', ScocheController.getEverything)
router.get('/:dni', ScocheController.getByDNI)
router.post('/', ScocheController.crearPoliza)
router.put('/:dni', ScocheController.updateByDNI)
router.delete('/:dni', ScocheController.borrarPoliza)


module.exports = router