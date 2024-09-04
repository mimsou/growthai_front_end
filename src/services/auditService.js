import axios from 'axios';

const BASE_URL = 'https://growthagent.onrender.com/api'; // Update with your actual backend URL

const auditService = {
  fetchAuditResults: async (url, auditSteps) => {
    const results = {};
    for (const step of auditSteps) {
      try {
        const response = await axios.post(`${BASE_URL}/audit/${step.urlText}`, { url });
        results[step.name] = response.data;
      } catch (error) {
        console.error(`Error fetching audit results for ${step.name}:`, error);
        // Handle error if needed
      }
    }
    return results;
  }
};

export default auditService;