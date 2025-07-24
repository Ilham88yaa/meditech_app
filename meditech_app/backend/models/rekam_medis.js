const mongoose = require('mongoose');

const rekamMedisSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  diagnosa: { type: String, required: true },
  tindakan: { type: String, required: true },
  tanggal: { type: Date, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('RekamMedis', rekamMedisSchema);
