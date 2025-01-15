import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { DealProps } from '../../types/appTypes';

export type AppContextTypes = {
  deals: DealProps[];
  setDeals: React.Dispatch<React.SetStateAction<DealProps[]>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  currentDeal: undefined;
  setCurrentDeal: React.Dispatch<React.SetStateAction<undefined>>;
  drawerDealFormControl: () => void;
  navigate: (path: string) => void;
  handleDeleteDeal: (deal: DealProps) => void;
};

//TODO:
export const AppContext = createContext<AppContextTypes | null>(null);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  //state for deals, TODO: move this to context API
  const [deals, setDeals] = useState<DealProps[]>([]);
  //state for loading deals
  const [loading, setLoading] = useState(false);
  //state for errors
  const [error, setError] = useState('');
  //state for drawer open/close
  const [open, setOpen] = useState(false);
  // editing state for form, passed down to form via context
  const [currentDeal, setCurrentDeal] = useState(undefined);

  //navigate hook, declared here for context & drawerDealFormControl() to work
  const navigate = useNavigate();
  //programatically open/close Drawer component containing AddDealForm
  const drawerDealFormControl = () => {
    if (open === true) {
      navigate('/');
      setOpen(false);
    } else {
      navigate('dealform');
      setOpen(true);
    }
  };
  //handlers
  //delete handler
  const handleDeleteDeal = async (deal: DealProps) => {
    const response = await fetch(`http://localhost:3000/delete/${deal._id}`, {
      method: 'delete',
    });
    if (response.ok) {
      console.log('successfully deleted deal');
    } else {
      console.log(error);
    }
  };
  //edit handler, for grabbing current ID

  return (
    <AppContext.Provider
      value={{
        deals,
        setDeals,
        loading,
        setLoading,
        error,
        setError,
        currentDeal,
        setCurrentDeal,
        handleDeleteDeal,
        open,
        setOpen,
        drawerDealFormControl,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
