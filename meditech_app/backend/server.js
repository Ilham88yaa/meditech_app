const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pasienRoutes = require('./routes/pasien_routes'); // ✅ HANYA SEKALI

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/pasien', pasienRoutes); // ✅ Sudah cukup

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
