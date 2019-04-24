const router = require('express').Router()
const Svida = require('../models/svida')
const SvidaController = require('../controllers/svidaController')

router.get('/', SvidaController.getEverything)
router.get('/:dni', SvidaController.getByDNI)
router.post('/', SvidaController.crearPoliza)
router.put('/:dni', SvidaController.updateByDNI)
router.delete('/:dni', SvidaController.borrarPoliza)


module.exports = router