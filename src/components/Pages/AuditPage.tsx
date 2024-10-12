import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import AuditProgress from './Audit/AuditProgress';
import CrawlingProgress from '../CrawlingProgress';

const AuditPage: React.FC = () => {
  const url = useSelector((state: RootState) => state.search.url);
  const sessionId = useSelector((state: RootState) => state.ai.sessionId);
  const [crawlingComplete, setCrawlingComplete] = useState(false);

  const handleCrawlingComplete = () => {
    setCrawlingComplete(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full h-screen"
    >
      <div className="bg-white shadow-sm rounded-xl">
        <div className=" mx-10 py-2">
          <div className="flex items-center justify-between text-sm">

            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Auditing:</span>
              <span className="text-gray-600 truncate max-w-xs">{url}</span>
              <span className="font-medium text-gray-700">Session ID:</span>
              <span className="text-gray-500">{sessionId}</span>
            </div>

            <div className="flex items-center space-x-4" style={{width:"500px"}}>
              {sessionId && <CrawlingProgress sessionId={sessionId} onCrawlingComplete={handleCrawlingComplete} />}
            </div>
            
            <div className="flex items-end space-x-4">
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-green-600 font-medium">In Progress</span>
              </div>
            </div>


          </div>
        </div>
      </div>

      {crawlingComplete && (
        <div className="flex flex-1">
          <div className="w-1/5 m-2">
            <div className="bg-white max-h-screen w-full p-4 rounded-lg shadow-md overflow-y-auto">
              <div className="mb-4">
                <div className="relative">
                  <textarea
                    placeholder="Ask AI..."
                    className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out resize-none"
                    rows={4}
                  ></textarea>
                  <button
                    className="absolute right-2 bottom-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/5 m-2">
            <AuditProgress className="m-2 flex flex-col" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AuditPage;