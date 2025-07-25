
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import RegistrasiPasien from './registrasi_pasien';
import JadwalKonsultasi from './jadwal_konsultasi';
import RekamMedis from './rekam_medis';
import PasienList from './pasien_list';
import FormBooking from './form_booking';
import FormRekamMedis from './form_rekam_medis';




const drawerWidth = 220;


const menuItems = [
  { text: 'Registrasi Pasien', icon: <PeopleIcon /> },
  { text: 'Jadwal Konsultasi', icon: <EventIcon /> },
  { text: 'Rekam Medis', icon: <MedicalServicesIcon /> },
  { text: 'Daftar Pasien', icon: <PeopleIcon /> },
  { text: 'Booking Konsultasi', icon: <EventIcon /> },
  { text: 'Input Rekam Medis', icon: <MedicalServicesIcon /> },
];



export default function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // ...existing code...

  // Responsive styles
  const styles = {
    appBar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      zIndex: 1201,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '24px',
      boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
    },
    // ...existing styles...
  };

  // ...existing code...

  // Render main content based on selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case 0:
        return <RegistrasiPasien />;
      case 1:
        return <JadwalKonsultasi />;
      case 2:
        return <RekamMedis />;
      case 3:
        return <PasienList />;
      case 4:
        return <FormBooking />;
      case 5:
        return <FormRekamMedis />;
      default:
        return null;
    }
  };

  // Responsive sidebar detection
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ display: 'flex', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* App Bar */}
      <div style={styles.appBar}>
        <h1 style={{
          color: 'white',
          fontSize: isMobile ? '1rem' : '1.25rem',
          fontWeight: '600',
          margin: 0,
          flexGrow: 1
        }}>
          Klinik Meditech - Dashboard
        </h1>
        <button
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            marginRight: '24px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
        >
          Logout
        </button>
      </div>

      {/* Sidebar for desktop */}
      {!isMobile && (
        <div style={{
          width: drawerWidth,
          position: 'fixed',
          left: 0,
          top: '64px',
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          overflow: 'auto'
        }}>
          <div style={{ padding: '20px 0' }}>
            {menuItems.map((item, index) => (
              <div
                key={item.text}
                onClick={() => setSelectedMenu(index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 20px',
                  margin: '4px 12px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: selectedMenu === index 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'transparent',
                  color: selectedMenu === index ? 'white' : '#374151',
                  fontWeight: selectedMenu === index ? '600' : '500'
                }}
                onMouseEnter={(e) => {
                  if (selectedMenu !== index) {
                    e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                    e.target.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedMenu !== index) {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateX(0)';
                  }
                }}
              >
                <span style={{ 
                  fontSize: '1.2rem', 
                  marginRight: '12px',
                  filter: selectedMenu === index ? 'brightness(0) invert(1)' : 'none'
                }}>
                  {item.icon}
                </span>
                <span style={{ fontSize: '0.95rem' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{
        marginLeft: isMobile ? 0 : drawerWidth,
        paddingTop: '64px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        flexGrow: 1
      }}>
        <div style={{
          padding: isMobile ? '12px' : '24px',
          background: 'transparent'
        }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
