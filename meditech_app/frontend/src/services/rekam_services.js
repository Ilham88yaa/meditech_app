import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rekam_medis';

export const createRekamMedis = async (data) => {
  try {
    const res = await axios.post(API_URL, data);
    return res.data;
  } catch (err) {
    console.error("❌ Error creating rekam medis:", err);
    throw err;
  }
};

export const getAllRekamMedis = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching rekam medis:", err);
    return [];
  }
};
