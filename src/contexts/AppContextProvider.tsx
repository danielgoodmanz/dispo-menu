import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { DealProps } from '../../types/appTypes';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export type AppContextTypes = {
  deals: DealProps[];
  setDeals: React.Dispatch<React.SetStateAction<DealProps[]>>;
  open: boolean;
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAppDialog: boolean;
  setIsAppDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  currentDeal: undefined | DealProps;
  isAdmin: boolean | null;
  //if initializing as undefined, you must specify to state setter it CAN be something else of type x
  setCurrentDeal: React.Dispatch<React.SetStateAction<undefined | DealProps>>;
  drawerDealFormControl: () => void;
  dialogInterestControl: () => void;
  appDialogControl: () => void;
  navigate: (path: string) => void;
  handleDeleteDeal: (deal: DealProps) => void;
  handleCurrentDeal: (deal: DealProps) => void;
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
  //state for form drawer open/close
  const [open, setOpen] = useState(false);
  //state for interest dialog open/close
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //state for app dialog open/close
  const [isAppDialog, setIsAppDialog] = useState(false);
  // editing state for form, passed down to form via context
  const [currentDeal, setCurrentDeal] = useState<DealProps | undefined>(
    undefined
  );

  //navigate hook, declared here for context & drawerDealFormControl() to work
  const navigate = useNavigate();
  //kindeauth hook
  const { getClaim, user } = useKindeAuth();
  //   const isAdmin = user
  //     ? getClaim('roles').value[0].key === 'admin'
  //       ? true
  //       : false
  //     : null;

  //explicitly structure the getClaim('roles') object returned
  const rolesClaim = getClaim('roles') as
    | { value?: { key: string }[] }
    | undefined;

  const isAdmin =
    user && rolesClaim?.value?.length
      ? rolesClaim.value[0].key === 'admin'
      : null;
  //programatically open/close Drawer component containing AddDealForm
  const drawerDealFormControl = () => {
    if (open === true) {
      navigate(`/${user?.given_name}`);
      setOpen(false);
      setCurrentDeal(undefined);
    } else {
      navigate(`${user?.given_name}/dealform`);
      setOpen(true);
    }
  };

  const dialogInterestControl = () => {
    if (isDialogOpen === true) {
      navigate(-2);
      setIsDialogOpen(false);
    } else {
      navigate(`/interest/:dealNumber`);
      setIsDialogOpen(true);
    }
  };

  const appDialogControl = () => {
    if (isAppDialog === true) {
      setIsAppDialog(false);
    } else {
      setIsAppDialog(true);
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
      setDeals((prevDeals) => prevDeals.filter((d) => d._id !== deal._id));
      appDialogControl();
    } else {
      console.log(error);
    }
  };
  //edit handler, for grabbing current ID
  const handleCurrentDeal = (deal: DealProps) => {
    setCurrentDeal(deal);
    drawerDealFormControl();
  };
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
        handleCurrentDeal,
        open,
        setOpen,
        drawerDealFormControl,
        dialogInterestControl,
        appDialogControl,
        isAppDialog,
        setIsAppDialog,
        isDialogOpen,
        setIsDialogOpen,
        navigate,
        isAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
