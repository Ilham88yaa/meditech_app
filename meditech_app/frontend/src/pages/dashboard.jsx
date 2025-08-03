
import React, { useState } from 'react';
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
import logoMeditech from "../img/logomeditech.png";

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

  // Responsive styles
  const styles = {
    container: {
      display: 'flex',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      flexDirection: 'row',
    },
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
    menuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '2rem',
      marginRight: '16px',
      cursor: 'pointer',
    },
    sidebar: {
      width: drawerWidth,
      position: 'fixed',
      left: 0,
      top: '64px',
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      overflow: 'auto',
      transition: 'transform 0.3s ease',
    },
    sidebarMobile: {
      position: 'fixed',
      left: 0,
      top: '64px',
      bottom: 0,
      width: '70vw',
      maxWidth: '320px',
      background: 'rgba(255,255,255,0.98)',
      zIndex: 1300,
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease',
    },
    overlay: {
      position: 'fixed',
      top: '64px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.2)',
      zIndex: 1299,
      display: sidebarOpen ? 'block' : 'none',
    },
    main: {
      marginLeft: drawerWidth,
      paddingTop: '64px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      flexGrow: 1,
      transition: 'margin-left 0.3s ease',
    },
    mainMobile: {
      marginLeft: 0,
      paddingTop: '64px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      flexGrow: 1,
    },
  };

  // Media query detection
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.container}>
      {/* App Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
        zIndex: 1201,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: isMobile ? 8 : 24,
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
      }}>
        {/* Only show menu button on mobile */}
        {isMobile && (
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#764ba2',
              fontSize: '2.1rem',
              cursor: 'pointer',
              marginRight: 12,
              outline: 'none',
              boxShadow: 'none',
              padding: 0,
            }}
            aria-label="Buka menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span style={{ fontSize: '2.1rem', fontWeight: 700 }}>&#9776;</span>
          </button>
        )}
        <h1 style={{
          color: '#764ba2',
          fontSize: isMobile ? '1rem' : '1.25rem',
          fontWeight: '600',
          margin: 0,
          flexGrow: 1,
          marginLeft: isMobile ? 0 : 8,
        }}>
          Klinik Meditech - Dashboard
        </h1>
        <button
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: isMobile ? '7px 16px' : '10px 24px',
            marginRight: isMobile ? 8 : 24,
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: isMobile ? '0.95rem' : '1.08rem',
            boxShadow: '0 2px 8px rgba(102,126,234,0.15)',
            letterSpacing: '0.5px',
            transition: 'background 0.3s',
            outline: 'none'
          }}
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }}
          onMouseOver={e => e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'}
          onMouseOut={e => e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}
        >
          Logout
        </button>
      </div>

      {/* Sidebar for desktop */}
      {!isMobile && (
        <div style={styles.sidebar}>
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

      {/* Sidebar for mobile */}
      {isMobile && (
        <>
          <div style={styles.overlay} onClick={() => setSidebarOpen(false)} />
          <div style={styles.sidebarMobile}>
            <div style={{ padding: '20px 0' }}>
              {menuItems.map((item, index) => (
                <div
                  key={item.text}
                  onClick={() => {
                    setSelectedMenu(index);
                    setSidebarOpen(false);
                  }}
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
        </>
      )}

      {/* Main Content */}
      <div style={isMobile ? styles.mainMobile : styles.main}>
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
