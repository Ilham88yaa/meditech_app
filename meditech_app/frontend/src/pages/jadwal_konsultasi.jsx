import React from 'react';
import { Typography, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const jadwalDummy = [
  { nama: 'Budi', dokter: 'dr. Siti', tanggal: '2025-07-12', jam: '09:00' },
  { nama: 'Ani', dokter: 'dr. Andi', tanggal: '2025-07-13', jam: '10:00' },
];

export default function JadwalKonsultasi() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Jadwal Konsultasi</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Pasien</TableCell>
              <TableCell>Dokter</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Jam</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jadwalDummy.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.dokter}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
                <TableCell>{row.jam}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
