import DealCard from '@/components/DealCard';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

//shadcnui components
import CardSkeleton from '@/components/CardSkeleton';
import Container from '@/components/Container';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from '@/components/ui/drawer';
import useAppContext from '@/hooks/useAppContext';
import ContainerGrid from '@/components/ContainerGrid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function App() {
  //consuming context
  const {
    deals,
    setDeals,
    loading,
    setLoading,
    error,
    setError,
    open,
    isDialogOpen,
    drawerDealFormControl,
    dialogInterestControl,
  } = useAppContext();

  //toast hook
  const { toast } = useToast();

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
      } catch (error: unknown) {
        //type guard
        if (error instanceof Error) {
          console.log(error);
          setError(error.message);
          toast({ description: error.message, variant: 'destructive' });
        }
      }
    };
    fetchDeals();
  }, []);

  return (
    <ThemeProvider defaultTheme='system' storageKey='dealmenu-theme'>
      <div>
        <Navbar />
        <Header
          title={`Saida & Jermaine's Deal-Menu wip 🛠️`}
          className='text-center'
        />
        <ContainerGrid>
          {/* render cards here  */}
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : deals.map((deal, index) => {
                return (
                  <DealCard key={deal._id} deal={deal} dealNumber={index + 1} />
                );
              })}
        </ContainerGrid>
        {/* drawer which opens AddDealForm.tsx, modified version of the entire Drawer component structure
        from shadcnUI as only certain elements were needed, can further trim it down */}
        <Drawer
          open={open}
          onOpenChange={drawerDealFormControl}
          direction='right'
        >
          <DrawerContent>
            <Outlet />
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <TvBar />
      </div>
      <Dialog open={isDialogOpen} onOpenChange={dialogInterestControl}>
        <DialogContent>
          <Outlet />
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
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
// state (context API) XXX
// WRITE TYPES XXX
// error TOASTS XXX

// UX: allow buyers to express priority interest in a property
// LANDING PAGE
// !! auth for Saida & Jermaine, global context here will be used to allow access to CRUD operations

// styling WIP
