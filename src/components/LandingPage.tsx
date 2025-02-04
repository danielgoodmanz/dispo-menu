import card from '@/assets/card.png';
import interest from '@/assets/interest.png';
import HeroHeader from '@/components/HeroHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import TvBar from '@/components/AnimatedTvBar';
import { Link } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider';

//pass any component into this function to make it a motion-enabled component
const MotionButton = motion.create(Button);

const LandingPage = () => {
  return (
    <ThemeProvider defaultTheme='system' storageKey='dealmenu-theme'>
      <div className='h-screen bg-[url(@/assets/city.jpg)] bg-cover'>
        <div id='gradient' className='h-screen'>
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
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{
                //   opacity: 0.8,
                //   scale: 1,
                //   rotate: 360,
                //   transition: {
                //     delay: 2,
                //   },
                // }}
                // whileHover={{ rotate: 360 }}
                className='bg-green-500'
                asChild
              >
                <Link to={'/'}>Get Access</Link>
              </MotionButton>
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
          {/* TODO: animate this TV bar as infinite horizontal scroll */}
          <TvBar />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
