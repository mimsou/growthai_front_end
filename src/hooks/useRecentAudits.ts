import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

interface Audit {
  id: string;
  url: string;
  date: string;
}

export const useRecentAudits = () => {
  const [recentAudits, setRecentAudits] = useState<Audit[]>([]);
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  useEffect(() => {
    // Fetch recent audits from API
    // This is a placeholder, replace with actual API call
    const fetchRecentAudits = async () => {
      // const response = await fetch(`/api/recent-audits/${userId}`);
      // const data = await response.json();
      // setRecentAudits(data);
      setRecentAudits([
        { id: '1', url: 'example.com', date: '2023-04-01' },
        { id: '2', url: 'test.com', date: '2023-03-28' },
      ]);
    };

    fetchRecentAudits();
  }, [userId]);

  return recentAudits;
};
