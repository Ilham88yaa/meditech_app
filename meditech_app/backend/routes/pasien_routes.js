const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasien_controller');

router.post('/', pasienController.createPasien);
router.get('/', pasienController.getAllPasien);
router.get('/:id', pasienController.getPasienById);
router.put('/:id', pasienController.updatePasien);
router.delete('/:id', pasienController.deletePasien);

module.exports = router;
