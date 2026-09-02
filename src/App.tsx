import DealCard from '@/components/DealCard';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Outlet, useParams } from 'react-router';
import {
  useQuery,
  useQueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
//shadcnui components
import CardSkeleton from '@/components/CardSkeleton';

import useAppContext from '@/hooks/useAppContext';
import ContainerGrid from '@/components/ContainerGrid';

import FormDrawer from '@/components/FormDrawer';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { DealProps } from 'types/appTypes';

function App() {
  //consuming context
  const { isAdmin, toast } = useAppContext();
  //params hook for routing
  const { agent } = useParams();
  //fetch for our query
  const fetchDeals = async (): Promise<DealProps[]> => {
    try {
      const response = await fetch('https://www.dispo-menu-backend.onrender.com');
      const json = await response.json();
      toast({
        description: 'successfully loaded all deals!',
        variant: 'success',
      });
      return json;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          description: `Error: ${error.message}`,
          variant: 'destructive',
        });
        throw error;
      }
    }
    // because we need to return a promise, return empty array (this should not happen)
    return [];
  };
  // access our client
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['deals', agent],
    queryFn: fetchDeals,
    refetchOnWindowFocus: false,
  });

  const { user, isLoading: kindeLoading } = useKindeAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='system' storageKey='dispo-menu-theme'>
        {/* kindeLoading wrapper necessary to remove flash of non auth state */}
        {kindeLoading ? null : (
          <div>
            <Navbar />
            <Header
              title={
                isAdmin ? `Welcome ${user?.given_name}` : `Today's Deal Menu`
              }
              className='max-sm:text-base text-center'
            />
            <ContainerGrid>
              {/* render cards here  */}
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))
                : data?.map((deal, index) => {
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
          </div>
        )}
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
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
// ADJUST ROUTES XXX
// LANDING PAGE XXX
// add 'subtitle' to deals ie 3/2 SFH etcc XXX
// TODO: DEBUG each child in a list should have a unique key on post route XXX
// prior to launch: get email keys from web3 email to dispo XXX
// DEPLOY XXX

// TODO:
// [X] tanstack query
// [X] tanstack error handling
