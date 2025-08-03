

import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth_service';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await registerUser(form);
      setSuccess('Registrasi berhasil! Silakan login.');
      setTimeout(() => navigate('/login'), 1200);
      if (onRegister) onRegister();
    } catch (err) {
      setError('Registrasi gagal. Email atau username mungkin sudah digunakan.');
    }
  };

  // Responsive style
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '16px',
    },
    card: {
      width: '100%',
      maxWidth: 370,
      padding: '32px 24px',
      borderRadius: '18px',
      boxShadow: '0 8px 32px rgba(102,126,234,0.12)',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      width: '90px',
      marginBottom: '12px',
    },
    title: {
      fontWeight: 700,
      fontSize: '1.3rem',
      color: '#764ba2',
      marginBottom: '18px',
      textAlign: 'center',
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    error: {
      color: '#e53935',
      fontSize: '0.95rem',
      textAlign: 'center',
      marginTop: '-8px',
      marginBottom: '4px',
    },
    success: {
      color: '#764ba2',
      fontSize: '0.95rem',
      textAlign: 'center',
      marginTop: '-8px',
      marginBottom: '4px',
    },
  };

  return (
    <Box style={styles.container}>
      <Paper style={styles.card}>
        <MedicalServicesIcon style={{ fontSize: 60, color: '#764ba2', marginBottom: 10 }} />
        <Typography style={styles.title}>Registrasi Admin</Typography>
        <Box component="form" onSubmit={handleSubmit} style={styles.form}>
          <TextField label="Username" name="username" value={form.username} onChange={handleChange} required fullWidth />
          <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth />
          <TextField label="Password" name="password" type="password" value={form.password} onChange={handleChange} required fullWidth />
          {error && <Typography style={styles.error}>{error}</Typography>}
          {success && <Typography style={styles.success}>{success}</Typography>}
          <Button type="submit" variant="contained" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', fontWeight: 600, borderRadius: '8px', padding: '10px 0', fontSize: '1rem', marginTop: '8px'}}>DAFTAR</Button>
        </Box>
      </Paper>
    </Box>
  );
}
