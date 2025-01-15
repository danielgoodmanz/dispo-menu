import { AppContext } from '@/contexts/AppContextProvider';
import { useContext } from 'react';

//this custom hoook allows type safety as context initially CAN load in 0.1% of cases as NULL
export default function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No context provided!');
  }
  return context;
}
