const express = require('express');
const router = express.Router();
const Pasien = require('../models/pasien');
const { createPasien } = require('../controllers/pasien_controller');

// GET semua pasien
router.get('/', async (req, res) => {
  try {
    const pasien = await Pasien.find();
    res.json(pasien);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST pasien baru
router.post('/', createPasien);

module.exports = router;
