import React from 'react';
import { Typography, Paper, Box, TextField, Button } from '@mui/material';

export default function RegistrasiPasien() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Registrasi Pasien</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nama Lengkap" variant="outlined" required />
        <TextField label="NIK" variant="outlined" required />
        <TextField label="Tanggal Lahir" type="date" InputLabelProps={{ shrink: true }} required />
        <TextField label="Alamat" variant="outlined" multiline rows={2} required />
        <TextField label="No. Telepon" variant="outlined" required />
        <Button variant="contained" color="primary">Daftar</Button>
      </Box>
    </Paper>
  );
}
