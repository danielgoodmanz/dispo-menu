import DealCard from '@/components/DealCard';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router';

//shadcnui components
import CardSkeleton from '@/components/CardSkeleton';

import useAppContext from '@/hooks/useAppContext';
import ContainerGrid from '@/components/ContainerGrid';

import FormDrawer from '@/components/FormDrawer';
import InterestDialog from '@/components/InterestDialog';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { DealProps } from 'types/appTypes';

function App() {
  //consuming context
  const { deals, setDeals, loading, setLoading, error, setError } =
    useAppContext();

  const { user, isAuthenticated, isLoading } = useKindeAuth();

  //toast hook
  const { toast } = useToast();

  //params hook for routing
  const { agent } = useParams();

  // useEffect hook to fetch all current deals
  useEffect(() => {
    const fetchDeals = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/`);
        const json = await response.json();
        console.log(json);
        if (response.ok && agent === 'daniel') {
          const dealsByAgent = json.filter((deal: DealProps) => {
            return deal.agent === agent ? deal : null;
          });
          setDeals(dealsByAgent);
          setLoading(false);
          toast({
            description: 'successfully loaded all deals!',
            variant: 'success',
          });
        } else if (!response.ok) {
          console.error(error);
        }
      } catch (error: unknown) {
        // lets handle errors for this useeffect
        //type guard
        if (error instanceof Error) {
          console.log(error);
          setError(error.message);
          toast({ description: error.message, variant: 'destructive' });
        }
      }
    };
    fetchDeals();
  }, [agent]);

  return (
    <ThemeProvider defaultTheme='system' storageKey='dealmenu-theme'>
      {/* isLoading wrapper necessary to remove flash of non auth state */}
      {isLoading ? null : (
        <div>
          <Navbar />
          <Header
            title={
              user ? `Welcome ${user?.given_name} 🛠️` : `Today's Deal Menu`
            }
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
                    <DealCard
                      key={deal._id}
                      deal={deal}
                      dealNumber={index + 1}
                    />
                  );
                })}
          </ContainerGrid>
          {/* drawer which opens AddDealForm.tsx, modified version of the entire Drawer component structure
        from shadcnUI as only certain elements were needed, can further trim it down */}
          <FormDrawer>
            <Outlet />
            {/* cleaner execution of Drawer component instead of placing it all here, make own custom compoinent allow it to accept
            children (Outlet) */}
          </FormDrawer>
          <TvBar />
          <InterestDialog>
            <Outlet />
          </InterestDialog>
        </div>
      )}
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
// UX: allow buyers to express priority interest in a property XXX
// !! auth for Saida & Jermaine, global context here will be used to allow access to CRUD operations XXX
//display deals based on params, /saida, /jermaine XXX

// ADJUST ROUTES
// LANDING PAGE
