const express = require('express');
const router = express.Router();
const RekamController = require('../controllers/rekam_controller');

router.post('/', RekamController.createRekamMedis);
router.get('/', RekamController.getAllRekamMedis);

module.exports = router;
