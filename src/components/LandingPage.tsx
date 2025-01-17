import Header from '@/components/Header';
import React from 'react';

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Header
        title={`Florida's most trusted wholesaler for over 20 years`}
        className='text-6xl text-balance'
      />
      <aside>
        Request access to our exclusive deal menu from our dispo team!
      </aside>
    </div>
  );
};

export default LandingPage;
