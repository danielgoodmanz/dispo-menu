import Header from '@/components/Header';

const LandingPage = () => {
  return (
    <div
      id='gradient'
      className='flex justify-around items-center h-screen text-center'
    >
      <Header
        title={`Florida's most trusted wholesaler for over 20 years`}
        className='text-6xl text-balance basis-1/2'
      />
      <aside className='text-xl basis-1/2'>
        Request access to our exclusive deal menu from our dispo team
      </aside>
    </div>
  );
};

export default LandingPage;
