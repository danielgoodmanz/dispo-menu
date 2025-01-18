import Header from '@/components/Header';

const LandingPage = () => {
  return (
    <div className='flex justify-around items-center h-screen text-center'>
      <Header
        title={`Florida's most trusted wholesaler for over 20 years`}
        className='text-6xl text-balance '
      />
      <aside className='text-xl '>
        Request access to our exclusive deal menu from our dispo team!
      </aside>
    </div>
  );
};

export default LandingPage;
