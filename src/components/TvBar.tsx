//logo imports
import ABC from '@/assets/ABC.svg';
import CBS from '@/assets/CBS.svg';
import FOX from '@/assets/FOX.svg';
import NBC from '@/assets/NBC.svg';
import { motion } from 'motion/react';

const TvBar = () => {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: '-100vw',
          transition: { duration: 8, repeat: Infinity, ease: 'linear' },
        }}
        className='flex justify-center space-x-15 items-center mt-20'
      >
        {' '}
        <p className='text-lg font-bold'>As Seen On</p>
        <p>|</p>
        <img src={ABC} alt='ABC logo' className='w-10 h-10 m-4' />
        <img src={CBS} alt='CBS logo' className='w-10 h-10 m-4' />
        <img src={FOX} alt='FOX logo' className='w-10 h-10 m-4' />
        <img src={NBC} alt='NCB logo' className='w-10 h-10 m-4' />
      </motion.div>
    </div>
  );
};

export default TvBar;
