const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasien_controller');

router.post('/', pasienController.createPasien);
router.get('/', pasienController.getAllPasien);

module.exports = router;
