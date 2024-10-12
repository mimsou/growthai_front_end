import axios from 'axios';
import   BASE_API_URL  from '../config';

const api = axios.create({
  baseURL: BASE_API_URL,
});

export const fetchAuditData = async (auditId: string, token: string) => {
  const response = await api.get(`/audit/${auditId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const submitAudit = async (url: string, token: string) => {
  const response = await api.post('/audit', { url }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add more API functions as needed
