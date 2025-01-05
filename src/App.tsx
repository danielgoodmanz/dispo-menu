import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Button } from '@/components/ui/button';
import { Outlet, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import DealCard from '@/components/DealCard';

//shadcnui components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer';
import Container from '@/components/Container';

// type Deals = {
//   deals: object;
//   setDeals: React.Dispatch<React.SetStateAction<object>>;
// };

function App() {
  //navigate hook
  const navigate = useNavigate();
  //state for deals, TODO: move this to context API
  const [deals, setDeals] = useState([]);
  //state for loading deals
  const [loading, setLoading] = useState(false);
  //state for drawer open/close
  const [open, setOpen] = useState(false);
  // useEffect hook to fetch all current deals
  useEffect(() => {
    const fetchDeals = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/`);
      const json = await response.json();
      console.log(json);
      setDeals(json);
      setLoading(false);
      return json;
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
          {deals.map((deal, index) => {
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
            <Outlet />
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

// styling WIP
// state (context API)
// error handling in the frontend
// UX: allow buyers to express priority interest in a property (toasts!)
// !! auth for Saida & Jermaine, global context here will be used to allow access to CRUD operations
