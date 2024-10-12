import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuditMode, setUrl, submitUrl } from 'store/actions';
import MovingDotCircle from 'components/Ui/MovingDotCircle';
import SearchInput from 'components/Ui/SearchInput';

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (url: string) => {
    dispatch(setUrl(url));
    dispatch(submitUrl(url) as any);
    dispatch(setAuditMode(true));
    navigate('/audit');
  };

  return (
    <motion.div
      initial={{ opacity: 0, top:0 }}
      animate={{ opacity: 1, top:10 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MovingDotCircle className="flex flex-col items-center mt-16 mb-10" />
      <SearchInput onSubmit={handleSubmit} className="flex flex-col items-center" />
    </motion.div>
  );
};

export default SearchPage;
