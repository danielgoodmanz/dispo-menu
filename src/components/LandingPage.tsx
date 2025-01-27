import Header from '@/components/Header';
import NavBar from '@/components/Navbar';
import card from '@/assets/card.png';
import interest from '@/assets/interest.png';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div id='gradient' className='flex h-screen items-center justify-around'>
        <div className='max-w-[50%] space-y-4'>
          <Header
            title={`Florida's most trusted wholesaler for over 20 years`}
            className='text-6xl text-balance'
          />
          <aside className='text-xl max-w-[500px]'>
            Request access to the exclusive deal menu from our dispo team
          </aside>
        </div>
        <div className=''>
          <img
            src={card}
            alt='card preview'
            className='h-[300px] w-[300px] rounded-xl shadow-xl shadow-black/25 '
          />
          <img
            src={interest}
            alt='card preview'
            className='h-[300px] w-[300px] rounded-xl shadow-xl shadow-black/25 rotate-x-50 rotate-z-45'
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
