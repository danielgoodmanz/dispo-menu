import DealCard from '@/components/DealCard';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
//shadcnui components
import CardSkeleton from '@/components/CardSkeleton';

import useAppContext from '@/hooks/useAppContext';
import ContainerGrid from '@/components/ContainerGrid';

import FormDrawer from '@/components/FormDrawer';
import InterestDialog from '@/components/InterestDialog';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { DealProps } from 'types/appTypes';
import { Button } from '@/components/ui/button';

function App() {
  //consuming context
  const { isAdmin, toast } = useAppContext();

  //fetch deals maybe move later to context provider
  const fetchDeals = async (): Promise<DealProps[]> => {
    // for testing loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('http://localhost:3000/');
    const json = await response.json();
    if (!response.ok) throw new Error('Error fetching deals');
    // toast({
    //   description: 'successfully loaded all deals!',
    //   variant: 'success',
    // });
    return json;
  };
  // access our client
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['deals'],

    // NEEDS TO BE TESTED
    queryFn: () => {
      try {
        fetchDeals();
      } catch (error) {
        toast({ description: error, variant: 'destructive' });
      }
      throw error;
    },
    refetchOnWindowFocus: false,
  });

  const { user, isLoading: kindeLoading } = useKindeAuth();

  //params hook for routing
  const { agent } = useParams();

  // TODO: implement tanstack query here to ditch useEffect
  // useEffect hook to fetch all current deals
  //   useEffect(() => {
  //     const fetchDeals = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await fetch(
  //           `https://dispo-menu-backend.onrender.com/`
  //         );
  //         const json = await response.json();
  //         console.log(json);
  //         if (response.ok && agent) {
  //           const dealsByAgent = json.filter((deal: DealProps) => {
  //             return deal.agent === agent ? deal : null;
  //           });
  //           setDeals(dealsByAgent);
  //           setLoading(false);
  //           toast({
  //             description: 'successfully loaded all deals!',
  //             variant: 'success',
  //           });
  //         } else if (!response.ok) {
  //           console.error(error);
  //         }
  //       } catch (error: unknown) {
  //         // lets handle errors for this useeffect
  //         //type guard
  //         if (error instanceof Error) {
  //           console.log(error);
  //           setError(error.message);
  //           toast({ description: error.message, variant: 'destructive' });
  //         }
  //       }
  //     };
  //     fetchDeals();
  //   }, [agent]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='system' storageKey='dispo-menu-theme'>
        {/* kindeLoading wrapper necessary to remove flash of non auth state */}
        {kindeLoading ? null : (
          <div>
            <Navbar />
            <Header
              title={
                isAdmin ? `Welcome ${user?.given_name}` : `Today's Deal Menus`
              }
              className='text-center'
            />
            {!agent && !isAdmin && (
              <div className='text-center space-x-4 mt-10 mb-10'>
                <Button className='' variant={'secondary'}>
                  <Link to={'/saida'}>Saida's Deals</Link>
                </Button>

                <Button variant={'secondary'}>
                  <Link to={'/jermaine'}>Jermaine's Deals </Link>
                </Button>
              </div>
            )}
            <ContainerGrid>
              {/* render cards here  */}
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))
                : agent
                ? data?.map((deal, index) => {
                    return (
                      <DealCard
                        key={deal._id}
                        deal={deal}
                        dealNumber={index + 1}
                      />
                    );
                  })
                : null}
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
// [] tanstack error handling

// good note to keep:
// if (response.ok) {
// you weren't creating a 'newDeal' here for mongoose to pick up on add an ID so I got a react child must have a key error
// create it, then hold the response.json(), you can't pass form data and expect an ID in return upon re-render
//   const newDeal = await response.json();
//   setDeals((prevDeals) => [
//     ...prevDeals,
//     // you can use as to assert type
//     newDeal,
//   ]);
//   drawerDealFormControl();
//   console.log(`successfully added deal with ${data}`);
// } else {
//   console.log(response.status);
// }
