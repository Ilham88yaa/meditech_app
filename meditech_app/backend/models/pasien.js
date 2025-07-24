const mongoose = require('mongoose');

const pasienSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  nik: { type: String, required: true, unique: true },
  tanggal_lahir: { type: Date, required: true },
  alamat: { type: String, required: true },
  no_hp: { type: String, required: true },

  // ✅ Tambahkan field ini agar tidak error karena index email_1
  email: {
    type: String,
    unique: true,
    default: () => `generated-${Date.now()}-${Math.floor(Math.random() * 1000)}@noemail.local`
  }
}, { timestamps: true });

module.exports = mongoose.model('Pasien', pasienSchema);
