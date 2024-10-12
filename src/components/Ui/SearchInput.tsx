import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

interface SearchInputProps {
  className?: string;
  onSubmit: (url: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ className, onSubmit }) => {
  const [url, setUrl] = useState('');
  const isLoading = useSelector((state: RootState) => state.search.isLoading);

  const handleSubmit = () => {
    onSubmit(url);
  };

  return (
    <div className={className}>
      <div className="flex items-center border border-border rounded-full px-5 py-3 bg-white shadow-sm transition-all duration-300 ease-in-out w-full max-w-2xl">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          className="flex-1 bg-transparent text-lg focus:outline-none transition-all duration-300 ease-in-out text-text-primary"
        />
        <button
          className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Auditing...' : 'Audit'}
        </button>
      </div>
    </div>
  );
};

export default SearchInput;