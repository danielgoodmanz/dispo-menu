import { AppProps } from 'types/appTypes';

const ContainerGrid = ({ children }: AppProps) => {
  return <div className='grid grid-cols-3 gap-4 mt-12 '>{children}</div>;
};

export default ContainerGrid;
