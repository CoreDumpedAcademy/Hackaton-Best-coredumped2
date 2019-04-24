const router = require('express').Router()
const Smoto = require('../models/smoto')
const SmotoController = require('../controllers/smotoController')

router.get('/', SmotoController.getEverything)
router.get('/:dni', SmotoController.getByDNI)
router.post('/', SmotoController.crearPoliza)
router.put('/:dni', SmotoController.updateByDNI)
router.delete('/:dni', SmotoController.borrarPoliza)


module.exports = router