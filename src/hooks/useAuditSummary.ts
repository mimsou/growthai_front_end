import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

export const useAuditSummary = () => {
  const [summary, setSummary] = useState({ totalAudits: 0, averageScore: 0 });
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  useEffect(() => {
    // Fetch audit summary from API
    // This is a placeholder, replace with actual API call
    const fetchSummary = async () => {
      // const response = await fetch(`/api/audit-summary/${userId}`);
      // const data = await response.json();
      // setSummary(data);
      setSummary({ totalAudits: 10, averageScore: 85 });
    };

    fetchSummary();
  }, [userId]);

  return summary;
};
