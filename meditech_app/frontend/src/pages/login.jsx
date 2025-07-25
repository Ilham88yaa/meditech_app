

import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth_service';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const token = await loginUser(form);
      localStorage.setItem('token', token);
      if (onLogin) onLogin();
      navigate('/dashboard');
    } catch (err) {
      setError('Username atau password salah');
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
    registerBtn: {
      marginTop: '10px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      padding: '8px 0',
      cursor: 'pointer',
      fontSize: '1rem',
      width: '100%',
      transition: 'background 0.3s',
    },
    loginBtn: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      padding: '10px 0',
      cursor: 'pointer',
      fontSize: '1rem',
      width: '100%',
      marginTop: '8px',
      transition: 'background 0.3s',
    },
    error: {
      color: '#e53935',
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
        <Typography style={styles.title}>Login ke Meditech</Typography>
        <Box component="form" onSubmit={handleSubmit} style={styles.form}>
          <TextField label="Email" name="email" type="email" value={form.email || ''} onChange={handleChange} required fullWidth />
          <TextField label="Password" name="password" type="password" value={form.password || ''} onChange={handleChange} required fullWidth />
          {error && <Typography style={styles.error}>{error}</Typography>}
          <Button type="submit" variant="contained" style={styles.loginBtn}>LOGIN</Button>
        </Box>
        <Button style={styles.registerBtn} onClick={() => navigate('/register')}>
          BELUM PUNYA AKUN? DAFTAR
        </Button>
      </Paper>
    </Box>
  );
}
