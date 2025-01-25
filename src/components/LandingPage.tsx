import Header from '@/components/Header';
import NavBar from '@/components/Navbar';
import card from '@/assets/card.png';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div id='gradient' className='flex flex-col h-screen justify-center'>
        <Header
          title={`Florida's most trusted wholesaler for over 20 years`}
          className='text-6xl text-balance'
        />
        <aside className='text-xl '>
          Request access to our exclusive deal menu from our dispo team
        </aside>
        <img
          src={card}
          alt='card preview'
          className='h-[300px] w-[225px] rounded-xl'
        />
      </div>
    </div>
  );
};

export default LandingPage;
