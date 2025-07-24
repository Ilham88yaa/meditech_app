import React, { useEffect, useState } from 'react';
import { getAllPasien, updatePasien, deletePasien } from '../services/pasien_service'; // ✅ import deletePasien
import {
  Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';

const PasienList = () => {
  const [pasien, setPasien] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedPasien, setSelectedPasien] = useState(null);

  const fetchData = () => {
    getAllPasien().then(data => setPasien(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (p) => {
    setSelectedPasien(p);
    setOpenEdit(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Apakah anda yakin ingin menghapus pasien ini?')) {
      try {
        await deletePasien(id);
        fetchData();
        alert('Data pasien berhasil dihapus');
      } catch (err) {
        console.error(err);
        alert('Gagal menghapus data pasien');
      }
    }
  };

  const handleEditChange = (e) => {
    setSelectedPasien({
      ...selectedPasien,
      [e.target.name]: e.target.value
    });
  };

  const handleEditSubmit = async () => {
    try {
      await updatePasien(selectedPasien._id, selectedPasien);
      setOpenEdit(false);
      fetchData();
      alert('Data pasien berhasil diupdate');
    } catch (err) {
      console.error(err);
      alert('Gagal mengupdate data pasien');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Daftar Pasien</Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Nama</TableCell>
              <TableCell sx={{ color: '#fff' }}>NIK</TableCell>
              <TableCell sx={{ color: '#fff' }}>Tanggal Lahir</TableCell>
              <TableCell sx={{ color: '#fff' }}>Alamat</TableCell>
              <TableCell sx={{ color: '#fff' }}>No. HP</TableCell>
              <TableCell sx={{ color: '#fff' }}>Aksi</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pasien.length > 0 ? (
              pasien.map((p) => (
                <TableRow key={p._id}>
                  <TableCell>{p.nama}</TableCell>
                  <TableCell>{p.nik}</TableCell>
                  <TableCell>{new Date(p.tanggal_lahir).toLocaleDateString()}</TableCell>
                  <TableCell>{p.alamat}</TableCell>
                  <TableCell>{p.no_hp}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" onClick={() => handleEditClick(p)}>Edit</Button>{' '}
                    <Button variant="contained" size="small" color="error" onClick={() => handleDeleteClick(p._id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">Belum ada data pasien.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal Edit */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Pasien</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField label="Nama" name="nama" value={selectedPasien?.nama || ''} onChange={handleEditChange} />
          <TextField label="NIK" name="nik" value={selectedPasien?.nik || ''} onChange={handleEditChange} />
          <TextField
            label="Tanggal Lahir"
            name="tanggal_lahir"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={selectedPasien?.tanggal_lahir ? selectedPasien.tanggal_lahir.slice(0,10) : ''}
            onChange={handleEditChange}
          />
          <TextField label="Alamat" name="alamat" value={selectedPasien?.alamat || ''} onChange={handleEditChange} />
          <TextField label="No. HP" name="no_hp" value={selectedPasien?.no_hp || ''} onChange={handleEditChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Batal</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PasienList;
