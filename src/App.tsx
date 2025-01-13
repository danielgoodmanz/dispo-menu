import DealCard from '@/components/DealCard';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

//shadcnui components
import Container from '@/components/Container';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from '@/components/ui/drawer';
import CardSkeleton from '@/components/CardSkeleton';

// type Deals = {
//   deals: object;
//   setDeals: React.Dispatch<React.SetStateAction<object>>;
// };

function App() {
  //navigate hook
  const navigate = useNavigate();
  //toast hook
  const { toast } = useToast();
  //state for deals, TODO: move this to context API
  const [deals, setDeals] = useState([]);
  //state for loading deals
  const [loading, setLoading] = useState(false);
  //state for errors
  const [error, setError] = useState('');
  //state for drawer open/close
  const [open, setOpen] = useState(false);
  // editing state for form, passed down to form via context
  const [currentDeal, setCurrentDeal] = useState(undefined);
  // useEffect hook to fetch all current deals
  useEffect(() => {
    // lets handle errors for this useeffect
    const fetchDeals = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/`);
        const json = await response.json();
        console.log(json);
        if (response.ok) {
          setDeals(json);
          setLoading(false);
          toast({
            description: 'successfully loaded all deals!',
            variant: 'success',
          });
        } else if (!response.ok) {
          console.error(error);
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchDeals();
  }, []);

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
  const handleDelete = async (deal) => {
    const response = await fetch(`http://localhost:3000/delete/${deal._id}`, {
      method: 'delete',
    });
    if (response.ok) {
      console.log('successfully deleted deal');
    } else {
      console.log(error);
    }
  };
  return (
    <ThemeProvider defaultTheme='system' storageKey='dealmenu-theme'>
      <div>
        <Navbar drawerDealFormControl={drawerDealFormControl} />
        <Header title={`Saida & Jermaine's Deal-Menu wip 🛠️`} />
        <Container>
          {/* render cards here  */}
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : deals.map((deal, index) => {
                return (
                  // TODO: refactor so that no need to props.etc.. just pass te deal object let the DealCard deconstruct
                  <DealCard
                    key={deal._id}
                    deal={deal}
                    handleDelete={handleDelete}
                    dealNumber={index + 1}
                    currentDeal={currentDeal}
                    setCurrentDeal={setCurrentDeal}
                    drawerDealFormControl={drawerDealFormControl}
                  />
                );
              })}
        </Container>
        {/* drawer which opens AddDealForm.tsx, modified version of the entire Drawer component structure
        from shadcnUI as only certain elements were needed, can further trim it down */}
        <Drawer
          open={open}
          onOpenChange={drawerDealFormControl}
          direction='right'
        >
          <DrawerContent>
            {/* pass down editing context */}
            <Outlet context={{ currentDeal, setCurrentDeal }} />
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <TvBar />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

// TODO:
// backend XXX
// database serving a schema of property details i.e. XXX
// address, price, arv, etc... XXX
// (dark mode toggle!) XXX
// add form with validation & error handling XXX
// routing, mostly SPA experience with <Outlet/> XXX
// error handling in the frontend XXX
// finish CRUD operations on the front end XXX
// styling WIP
// state (context API)
// WRITE TYPES
// UX: allow buyers to express priority interest in a property (toasts!)
// !! auth for Saida & Jermaine, global context here will be used to allow access to CRUD operations
