//logo imports
import ABC from '@/assets/ABC.svg';
import CBS from '@/assets/CBS.svg';
import FOX from '@/assets/FOX.svg';
import NBC from '@/assets/NBC.svg';

const TvBar = () => {
  return (
    <div className='flex flex-row justify-around bg-primary'>
      <p>As Seen On</p>
      <img src={ABC} alt='ABC logo' className='w-10 h-10' />
      <img src={CBS} alt='CBS logo' className='w-10 h-10' />
      <img src={FOX} alt='FOX logo' className='w-10 h-10' />
      <img src={NBC} alt='NCB logo' className='w-10 h-10' />
    </div>
  );
};

export default TvBar;
