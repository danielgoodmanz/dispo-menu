import { AppProps } from 'types/appTypes';

const ContainerGrid = ({ children }: AppProps) => {
  return (
    <div className='grid grid-cols-3 gap-4 my-12 justify-items-center'>
      {children}
    </div>
  );
};

export default ContainerGrid;
