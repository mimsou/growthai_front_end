import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUrl, setLoading } from '../../store/actions';

const SearchInput = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.search.url);

  const handleChange = (e) => {
    dispatch(setUrl(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(setLoading(true));
    setTimeout(() => dispatch(setLoading(false)), 2000); // Simulate API call
  };

  return (
    <div className="relative w-full max-w-lg">
      <div
        className="flex items-center border border-gray-300 rounded-full px-5 py-3 bg-white shadow-sm transition-all duration-300 ease-in-out"
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Enter website URL"
          className="flex-1 bg-transparent text-lg focus:outline-none transition-all duration-300 ease-in-out text-gray-700"
        />
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={handleSubmit}
          style={{ width: '100px' }}
        >
          Audit
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
