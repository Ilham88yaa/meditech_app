const Pasien = require('../models/pasien');

// Create pasien
exports.createPasien = async (req, res) => {
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

        await pasien.save();
        res.status(201).json(pasien);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all pasien
exports.getAllPasien = async (req, res) => {
    try {
        const pasien = await Pasien.find();
        res.json(pasien);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
