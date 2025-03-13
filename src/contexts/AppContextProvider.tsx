import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { DealProps } from '../../types/appTypes';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useToast } from '@/hooks/use-toast';

export type AppContextTypes = {
  open: boolean;
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAppDialog: boolean;
  setIsAppDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentDeal: undefined | DealProps;
  //if initializing as undefined, you must specify to state setter it CAN be something else of type x
  setCurrentDeal: React.Dispatch<React.SetStateAction<undefined | DealProps>>;
  isAdmin: boolean | null;
  drawerDealFormControl: () => void;
  dialogInterestControl: () => void;
  appDialogControl: () => void;
  navigate: (path: string) => void;
  handleCurrentDeal: (deal: DealProps) => void;
  //@ts-expect-error need to figure out how to type these toasts
  toast: ({ ...props }: Toast) => {
    id: string;
    dismiss: () => void;
    //@ts-expect-error need to figure out how to type these toasts
    update: (props: ToasterToast) => void;
  };
};

export const AppContext = createContext<AppContextTypes | null>(null);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  //state for loading deals
  const [loading, setLoading] = useState(false);
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
  //toast hook
  const { toast } = useToast();
  //kindeauth hook
  const { getClaim, user } = useKindeAuth();

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
      navigate(`/`);
      setOpen(false);
      setCurrentDeal(undefined);
    } else {
      navigate(`/dealform`);
      setOpen(true);
    }
  };

  const dialogInterestControl = () => {
    if (isDialogOpen === true) {
      navigate(-1);
      setIsDialogOpen(false);
    } else {
      navigate(`/`);
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
  //edit handler, for grabbing current ID
  const handleCurrentDeal = (deal: DealProps) => {
    setCurrentDeal(deal);
    drawerDealFormControl();
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        currentDeal,
        setCurrentDeal,
        handleCurrentDeal,
        open,
        setOpen,
        drawerDealFormControl,
        appDialogControl,
        dialogInterestControl,
        isAppDialog,
        setIsAppDialog,
        isDialogOpen,
        setIsDialogOpen,
        navigate,
        isAdmin,
        toast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
