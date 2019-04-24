
const router = require('express').Router();
const Test = require('../models/test');
const testController = require('../controllers/testController');

router.get('/', testController.testGetData);
router.post('/', testController.testCreate);

module.exports = router;