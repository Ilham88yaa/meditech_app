const mongoose = require('mongoose');

const pasienSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    nik: { type: String, required: true, unique: true },
    tanggal_lahir: { type: Date, required: true },
    alamat: { type: String, required: true },
    no_hp: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pasien', pasienSchema);
