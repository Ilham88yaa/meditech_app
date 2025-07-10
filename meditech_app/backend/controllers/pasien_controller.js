const Pasien = require('../models/pasien');

// Create pasien
exports.createPasien = async (req, res) => {
    try {
        const pasien = new Pasien(req.body);
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

// Get pasien by ID
exports.getPasienById = async (req, res) => {
    try {
        const pasien = await Pasien.findById(req.params.id);
        res.json(pasien);
    } catch (err) {
        res.status(404).json({ message: 'Pasien not found' });
    }
};

// Update pasien
exports.updatePasien = async (req, res) => {
    try {
        const pasien = await Pasien.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(pasien);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete pasien
exports.deletePasien = async (req, res) => {
    try {
        await Pasien.findByIdAndDelete(req.params.id);
        res.json({ message: 'Pasien deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
