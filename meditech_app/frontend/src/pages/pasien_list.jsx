import React, { useEffect, useState } from 'react';
import { getAllPasien, updatePasien, deletePasien } from '../services/pasien_service';
import {
  Typography, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Paper
} from '@mui/material';
import DataTable from 'react-data-table-component';

const PasienList = () => {
  const [pasien, setPasien] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedPasien, setSelectedPasien] = useState(null);
  const [search, setSearch] = useState('');

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

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data pasien ini?')) {
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

  const columns = [
    { name: 'Nama', selector: row => row.nama, sortable: true },
    { name: 'NIK', selector: row => row.nik },
    { name: 'Tanggal Lahir', selector: row => new Date(row.tanggal_lahir).toLocaleDateString() },
    { name: 'Alamat', selector: row => row.alamat },
    { name: 'No. HP', selector: row => row.no_hp },
    {
      name: 'Aksi',
      cell: row => (
        <>
          <Button variant="outlined" size="small" onClick={() => handleEditClick(row)}>Edit</Button>{' '}
          <Button variant="contained" color="error" size="small" onClick={() => handleDelete(row._id)}>Delete</Button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

  const filteredPasien = pasien.filter(p =>
    p.nama.toLowerCase().includes(search.toLowerCase()) ||
    p.nik.toLowerCase().includes(search.toLowerCase()) ||
    p.alamat.toLowerCase().includes(search.toLowerCase()) ||
    p.no_hp.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Daftar Pasien</Typography>

      <TextField
        label="Cari pasien..."
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
          data={filteredPasien}
          pagination
          highlightOnHover
          responsive
          dense
          noDataComponent="Tidak ada data pasien ditemukan."
        />
      </Paper>

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
            value={selectedPasien?.tanggal_lahir ? selectedPasien.tanggal_lahir.slice(0, 10) : ''}
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
