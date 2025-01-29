import NavBar from '@/components/Navbar';
import card from '@/assets/card.png';
import interest from '@/assets/interest.png';
import HeroHeader from '@/components/HeroHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const MotionComponent = motion.create(HeroHeader);

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div id='gradient' className='flex h-screen items-center justify-around'>
        <div className='max-w-[50%] space-y-4'>
          <HeroHeader>
            Florida's{' '}
            <span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text'>
              most trusted
            </span>{' '}
            wholesaler for over
            <span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text'>
              {' '}
              20 years
            </span>
          </HeroHeader>
          <aside className='text-xl max-w-[500px] '>
            Request access to the exclusive deal menu from our dispo team
          </aside>
          <Button variant={'secondary'} className='opacity-80'>
            Get access{' '}
          </Button>
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
