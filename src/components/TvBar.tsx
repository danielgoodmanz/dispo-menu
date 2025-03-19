//logo imports
import ABC from '@/assets/ABC.svg';
import CBS from '@/assets/CBS.svg';
import FOX from '@/assets/FOX.svg';
import NBC from '@/assets/NBC.svg';

const TvBar = () => {
  return (
    <div>
      <div className='flex justify-around items-center gap-x-4 py-4 bg-primary'>
        <p className='max-sm:text-xs text-lg font-semibold'>As Seen On</p>
        <img src={ABC} alt='ABC logo' className='max-sm:size-6 w-10 h-10' />
        <img src={CBS} alt='CBS logo' className='max-sm:size-6 w-10 h-10' />
        <img src={FOX} alt='FOX logo' className='max-sm:size-6 w-10 h-10' />
        <img src={NBC} alt='NCB logo' className='max-sm:size-6 w-10 h-10' />
      </div>
    </div>
  );
};

export default TvBar;
