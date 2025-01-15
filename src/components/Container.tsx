import { AppProps } from 'types/appTypes';

const Container = ({ children }: AppProps) => {
  return (
    <div className='flex flex-wrap items-center justify-center mt-12 gap-4'>
      {children}
    </div>
  );
};

export default Container;
