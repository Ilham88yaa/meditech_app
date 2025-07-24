const Pasien = require('../models/pasien');

// [C] CREATE pasien
exports.createPasien = async (req, res) => {
  console.log("REQ.BODY:", req.body);
  try {
    const { nama, nik, tanggal_lahir, alamat, no_hp } = req.body;

    // Validasi input sederhana
    if (!nama || !nik || !tanggal_lahir || !alamat || !no_hp) {
      return res.status(400).json({ message: 'Semua field wajib diisi.' });
    }

    const pasien = new Pasien({
      nama,
      nik,
      tanggal_lahir,
      alamat,
      no_hp
    });

    await pasien.save(); // ✅ pindahkan di sini setelah pasien dibuat
    res.status(201).json(pasien);
  } catch (err) {
    console.error("❌ Error saat createPasien:", err);
    res.status(400).json({ message: err.message });
  }
};

// [R] READ all pasien
exports.getAllPasien = async (req, res) => {
  try {
    const pasien = await Pasien.find();
    res.json(pasien);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// [U] UPDATE pasien
exports.updatePasien = async (req, res) => {
  try {
    const pasien = await Pasien.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pasien) return res.status(404).json({ message: 'Pasien tidak ditemukan.' });
    res.json(pasien);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// [D] DELETE pasien
exports.deletePasien = async (req, res) => {
  try {
    const pasien = await Pasien.findByIdAndDelete(req.params.id);
    if (!pasien) return res.status(404).json({ message: 'Pasien tidak ditemukan' });
    res.json({ message: 'Pasien berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
