import { AppProps } from 'types/appTypes';

const ContainerGrid = ({ children }: AppProps) => {
  return (
    <div className='grid max-sm:grid-cols-1 grid-cols-3 gap-4 my-12 justify-items-center'>
      {children}
    </div>
  );
};

export default ContainerGrid;
