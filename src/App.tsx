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
                  <DealCard
                    key={deal._id}
                    dealNumber={index + 1}
                    createdAt={deal.createdAt}
                    address={deal.address}
                    livingArea={deal.livingArea}
                    lot={deal.lot}
                    yearBuilt={deal.yearBuilt}
                    escrow={deal.escrow}
                    closing={deal.closing}
                    price={deal.price}
                    description={deal.description}
                    photo={deal.photo}
                    onClick={() => console.log(deal._id)}
                  />
                );
              })}
        </Container>
        {/* drawer which opens AddDealForm.tsx */}
        <Drawer
          open={open}
          onOpenChange={drawerDealFormControl}
          direction='right'
        >
          <DrawerContent>
            <Outlet context={{ deals }} />
            <DrawerDescription></DrawerDescription>
            <DrawerFooter>
              <DrawerClose>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
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
// finish CRUD operations on the front end
// styling WIP
// state (context API)
// UX: allow buyers to express priority interest in a property (toasts!)
// !! auth for Saida & Jermaine, global context here will be used to allow access to CRUD operations
