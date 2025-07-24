const Jadwal = require('../models/jadwal_konsultasi');

// Create jadwal
exports.createJadwal = async (req, res) => {
  try {
    const { nama, dokter, tanggal, jam } = req.body;
    const jadwal = new Jadwal({ nama, dokter, tanggal, jam });
    await jadwal.save();
    res.status(201).json(jadwal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all jadwal
exports.getAllJadwal = async (req, res) => {
  try {
    const jadwal = await Jadwal.find();
    res.json(jadwal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
