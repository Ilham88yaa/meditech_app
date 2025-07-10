import React from 'react';
import { Typography, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const rekamMedisDummy = [
  { nama: 'Budi', diagnosa: 'Flu', tindakan: 'Obat flu', tanggal: '2025-07-10' },
  { nama: 'Ani', diagnosa: 'Demam', tindakan: 'Obat penurun panas', tanggal: '2025-07-09' },
];

export default function RekamMedis() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Rekam Medis</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Pasien</TableCell>
              <TableCell>Diagnosa</TableCell>
              <TableCell>Tindakan</TableCell>
              <TableCell>Tanggal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rekamMedisDummy.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.diagnosa}</TableCell>
                <TableCell>{row.tindakan}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
