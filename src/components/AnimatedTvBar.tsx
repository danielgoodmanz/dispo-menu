//logo imports
import ABC from '@/assets/ABC.svg';
import CBS from '@/assets/CBS.svg';
import FOX from '@/assets/FOX.svg';
import NBC from '@/assets/NBC.svg';
import { motion } from 'motion/react';

const AnimatedTvBar = () => {
  return (
    <div
      className='overflow-hidden'
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent 100%)',
      }}
    >
      <motion.div
        initial={{ x: '100vw' }}
        animate={{
          x: '-100vw',
          transition: {
            duration: 12,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        }}
      >
        <div className='flex justify-around space-x-14 items-center'>
          <p className='text-lg font-bold'>As Seen On</p>
          <img src={ABC} alt='ABC logo' className='w-10 h-10 m-4' />
          <img src={CBS} alt='CBS logo' className='w-10 h-10 m-4' />
          <img src={FOX} alt='FOX logo' className='w-10 h-10 m-4' />
          <img src={NBC} alt='NCB logo' className='w-10 h-10 m-4' />
        </div>
        {/* tried to implement a infinite scroll here but didn't work too well with few items in the bar */}
        {/* <div className='flex justify-around space-x-15 items-center'>
          <p className='text-lg font-bold'>As Seen On</p>
          <p>|</p>
          <img src={ABC} alt='ABC logo' className='w-10 h-10 m-4' />
          <img src={CBS} alt='CBS logo' className='w-10 h-10 m-4' />
          <img src={FOX} alt='FOX logo' className='w-10 h-10 m-4' />
          <img src={NBC} alt='NCB logo' className='w-10 h-10 m-4' />
        </div> */}
      </motion.div>
    </div>
  );
};

export default AnimatedTvBar;
