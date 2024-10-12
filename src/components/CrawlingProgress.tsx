import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import {BASE_URL} from '../config';

interface CrawlingProgressProps {
  sessionId: string;
  onCrawlingComplete: () => void;
}

const CrawlingProgress: React.FC<CrawlingProgressProps> = ({ sessionId, onCrawlingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentUrl, setCurrentUrl] = useState('');
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const connectSocket = () => {
      socketRef.current = io(BASE_URL, {
        transports: ['websocket'],
        withCredentials: true,
      });

      socketRef.current.on('connect', () => {
        console.log('WebSocket connected');
      });

      socketRef.current.on('crawlingProgress', (data: { percentage: number; currentUrl: string }) => {
        console.log('Received crawling progress:', data);
        setProgress(data.percentage);
        setCurrentUrl(data.currentUrl);
      });

      socketRef.current.on('crawlingCompleted', (data: { averageScores: string }) => {
        console.log('Crawling completed:', data);
        onCrawlingComplete();
      });

      socketRef.current.on('disconnect', () => {
        console.log('WebSocket disconnected');
      });

      socketRef.current.on('connect_error', (error) => {
        console.error('Connection error:', error);
        setTimeout(() => {
          socketRef.current?.connect();
        }, 1000);
      });
    };

    connectSocket();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [onCrawlingComplete]);

  const truncateUrl = (url: string, maxLength: number) => {
    return url.length > maxLength ? url.substring(0, maxLength - 3) + '...' : url;
  };

  return (
    <div className="flex items-center space-x-2 ">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-600   ">
        {truncateUrl(currentUrl, 30)}
      </span>
    </div>
  );
};

export default CrawlingProgress;