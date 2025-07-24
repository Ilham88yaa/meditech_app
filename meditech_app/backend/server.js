const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pasienRoutes = require('./routes/pasien_routes');
const Pasien = require('./models/pasien'); // ✅ import model pasien
const jadwalRoutes = require('./routes/jadwal_routes');
const rekamRoutes = require('./routes/rekam_routes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/pasien', pasienRoutes);
app.use('/api/jadwal', jadwalRoutes);
app.use('/api/rekam_medis', rekamRoutes);

mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// ✅ ROUTE UNTUK GET DATA PASIEN DI ROOT "/"
app.get('/', async (req, res) => {
  try {
    const data = await Pasien.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
