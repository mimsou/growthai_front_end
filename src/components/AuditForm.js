import React, { useState } from 'react';
import auditService from '../services/auditService';

const AuditForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <div className="max-w-md w-full p-6 bg-white rounded shadow-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Website Audit</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL"
            className="flex-1 appearance-none rounded border-gray-300 py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Audit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuditForm;