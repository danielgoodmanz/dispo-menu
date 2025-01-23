import Header from '@/components/Header';
import NavBar from '@/components/Navbar';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
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
    </div>
  );
};

export default LandingPage;
