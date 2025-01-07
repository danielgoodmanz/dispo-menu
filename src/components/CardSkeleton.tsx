import { Skeleton } from '@/components/ui/skeleton';

const CardSkeleton = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <Skeleton className='h-14 w-40 rounded-xl'></Skeleton>
      <Skeleton className='h-40 w-40 rounded-xl'></Skeleton>
      <Skeleton className='h-8 w-40 rounded-xl'></Skeleton>
      <Skeleton className='h-8 w-40 rounded-xl'></Skeleton>
    </div>
  );
};

export default CardSkeleton;
