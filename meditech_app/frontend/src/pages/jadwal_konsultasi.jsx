import React, { useEffect, useState } from 'react';
import { getAllJadwal } from '../services/jadwal_service';
import {
  Typography, Paper, Box, TextField
} from '@mui/material';
import DataTable from 'react-data-table-component';

export default function JadwalKonsultasi() {
  const [jadwal, setJadwal] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllJadwal().then(data => setJadwal(data));
  }, []);

  const columns = [
    { name: 'Nama Pasien', selector: row => row.nama, sortable: true },
    { name: 'Dokter', selector: row => row.dokter, sortable: true },
    { name: 'Tanggal', selector: row => new Date(row.tanggal).toLocaleDateString(), sortable: true },
    { name: 'Jam', selector: row => row.jam }
  ];

  const filteredData = jadwal.filter(item =>
    item.nama.toLowerCase().includes(search.toLowerCase()) ||
    item.dokter.toLowerCase().includes(search.toLowerCase()) ||
    item.tanggal.toLowerCase?.().includes(search.toLowerCase()) // if needed
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Jadwal Konsultasi</Typography>

      <TextField
        label="Cari pasien / dokter..."
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Paper elevation={3}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          dense
          responsive
          noDataComponent="Tidak ada jadwal ditemukan."
        />
      </Paper>
    </Box>
  );
}
