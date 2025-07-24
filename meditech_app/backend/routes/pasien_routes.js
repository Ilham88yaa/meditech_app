const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasien_controller');

router.post('/', pasienController.createPasien);
router.get('/', pasienController.getAllPasien);
router.put('/:id', pasienController.updatePasien);    // [U] Update
router.delete('/:id', pasienController.deletePasien); // [D] Delete

module.exports = router;
