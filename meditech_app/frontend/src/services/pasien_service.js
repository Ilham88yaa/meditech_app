// src/services/pasien_service.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pasien';

export const getAllPasien = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/pasien');
    return response.data;
  } catch (error) {
    console.error('❌ Gagal mengambil data pasien:', error);
    return [];
  }
};

export const updatePasien = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deletePasien = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
