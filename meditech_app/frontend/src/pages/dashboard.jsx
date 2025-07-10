
import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import RegistrasiPasien from './registrasi_pasien';
import JadwalKonsultasi from './jadwal_konsultasi';
import RekamMedis from './rekam_medis';

const drawerWidth = 220;


const menuItems = [
  { text: 'Registrasi Pasien', icon: <PeopleIcon /> },
  { text: 'Jadwal Konsultasi', icon: <EventIcon /> },
  { text: 'Rekam Medis', icon: <MedicalServicesIcon /> },
];


export default function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const renderContent = () => {
    switch (selectedMenu) {
      case 0:
        return <RegistrasiPasien />;
      case 1:
        return <JadwalKonsultasi />;
      case 2:
        return <RekamMedis />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Klinik Meditech - Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#1976d2', color: '#fff' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={item.text} selected={selectedMenu === index} onClick={() => setSelectedMenu(index)}>
                <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f4f6f8', p: 3, minHeight: '100vh' }}>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
}
