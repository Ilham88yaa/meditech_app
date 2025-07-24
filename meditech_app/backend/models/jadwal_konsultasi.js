const mongoose = require('mongoose');

const JadwalSchema = new mongoose.Schema({
  nama: String,
  dokter: String,
  tanggal: Date,
  jam: String
});

module.exports = mongoose.model('JadwalKonsultasi', JadwalSchema);
