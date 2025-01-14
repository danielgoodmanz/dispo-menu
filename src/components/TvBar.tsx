//logo imports
import ABC from '@/assets/ABC.svg';
import CBS from '@/assets/CBS.svg';
import FOX from '@/assets/FOX.svg';
import NBC from '@/assets/NBC.svg';

const TvBar = () => {
  return (
    <div className='flex bg-primary justify-center space-x-8 items-center'>
      <p className='text-lg font-bold'>As Seen On</p>
      <p>|</p>
      <img src={ABC} alt='ABC logo' className='w-10 h-10 m-4' />
      <img src={CBS} alt='CBS logo' className='w-10 h-10 m-4' />
      <img src={FOX} alt='FOX logo' className='w-10 h-10 m-4' />
      <img src={NBC} alt='NCB logo' className='w-10 h-10 m-4' />
    </div>
  );
};

export default TvBar;
