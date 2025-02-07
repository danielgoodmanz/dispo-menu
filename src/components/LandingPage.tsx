import card from '@/assets/card.png';
import interest from '@/assets/interest.png';
import HeroHeader from '@/components/HeroHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import TvBar from '@/components/AnimatedTvBar';
import { Link } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider';
import city from '@/assets/city.jpg';
//pass any component into this function to make it a motion-enabled component
const MotionButton = motion.create(Button);

const LandingPage = () => {
  return (
    <ThemeProvider defaultTheme='system' storageKey='dealmenu-theme'>
      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 5, delay: 1 }}
        id=''
        className='h-screen relative'
      >
        {/* TODO: try an img element, apply a maskimg linear gradient instead of our current solution */}
        <img className='absolute h-full w-full -z-10' src={city} alt='' />
        <div className='flex items-center justify-around pt-[10vh]'>
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
            <motion.aside
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              className='text-xl max-w-[500px] font-semibold tracking-tighter '
            >
              Request access to the exclusive deal menu from our dispo team
            </motion.aside>
            <MotionButton
              variant={'secondary'}
              className='bg-green-500'
              asChild
            >
              <Link to={'/'}>Get Access</Link>
            </MotionButton>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: {
                type: 'spring',
                visualDuration: 0.4,
                bounce: 0.5,
                delay: 3,
              },
            }}
          >
            <img
              src={card}
              alt='card preview'
              className='h-[300px] w-[300px] rounded-xl shadow-xl shadow-black/25 '
              loading='lazy'
            />
            <img
              src={interest}
              alt='card preview'
              className='h-[300px] w-[300px] rounded-xl shadow-xl shadow-black/25 rotate-x-50 rotate-z-45'
              loading='lazy'
            />
          </motion.div>
        </div>
        <TvBar />
      </motion.div>
    </ThemeProvider>
  );
};

export default LandingPage;
