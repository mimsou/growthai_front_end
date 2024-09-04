import React from 'react';
import MovingDotCircle from '../Ui/MovingDotCircle';
import SearchInput from '../Ui/SearchInput';
import BaseLayout from '../Layout/BaseLayout';

const LandingPage = () => {
  return (
    <BaseLayout>
      <MovingDotCircle />
      <SearchInput />
    </BaseLayout>
  );
};

export default LandingPage;