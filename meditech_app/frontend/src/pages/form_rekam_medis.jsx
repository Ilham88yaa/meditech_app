import React, { useState } from 'react';
import {
  Box, Paper, TextField, Button, Typography
} from '@mui/material';
import { createRekamMedis } from '../services/rekam_services';
import DataTable from 'react-data-table-component';

export default function FormRekamMedis() {
  const [form, setForm] = useState({
    nama: '',
    diagnosa: '',
    tindakan: '',
    tanggal: ''
  });

  const [data, setData] = useState([
    { nama: 'Budi', diagnosa: 'flu', tindakan: 'obat', tanggal: '2025-07-23' },
    { nama: 'Sari', diagnosa: 'demam', tindakan: 'vaksin', tanggal: '2025-07-23' },
  ]);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRekamMedis(form); // optional backend call
      alert('Rekam medis berhasil disimpan');

      setData(prev => [...prev, form]); // tambah data ke tabel
      setForm({ nama: '', diagnosa: '', tindakan: '', tanggal: '' });
    } catch (err) {
      console.error(err);
      alert('Gagal menyimpan rekam medis');
    }
  };

  const columns = [
    { name: 'Nama Pasien', selector: row => row.nama, sortable: true },
    { name: 'Diagnosa', selector: row => row.diagnosa },
    { name: 'Tindakan', selector: row => row.tindakan },
    { name: 'Tanggal', selector: row => row.tanggal }
  ];

  const filteredData = data.filter(item =>
    item.nama.toLowerCase().includes(search.toLowerCase()) ||
    item.diagnosa.toLowerCase().includes(search.toLowerCase()) ||
    item.tindakan.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Form Rekam Medis</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Nama Pasien" name="nama" value={form.nama} onChange={handleChange} required />
          <TextField label="Diagnosa" name="diagnosa" value={form.diagnosa} onChange={handleChange} required />
          <TextField label="Tindakan" name="tindakan" value={form.tindakan} onChange={handleChange} required />
          <TextField type="date" name="tanggal" label="Tanggal" value={form.tanggal} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
          <Button type="submit" variant="contained">Simpan Rekam Medis</Button>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>Daftar Rekam Medis</Typography>
      <TextField
        label="Cari data..."
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        responsive
        dense
        noDataComponent="Tidak ada data yang ditemukan."
      />
    </Box>
  );
}
