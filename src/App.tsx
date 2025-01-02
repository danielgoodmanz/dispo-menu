import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Button } from '@/components/ui/button';
import { Outlet, useNavigate } from 'react-router';
import { useState } from 'react';

//shadcnui components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer';

// type Deals = {
//   deals: object;
//   setDeals: React.Dispatch<React.SetStateAction<object>>;
// };

function App() {
  //navigate hook
  const navigate = useNavigate();

  //state for drawer open/close
  const [open, setOpen] = useState(false);

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
        <div className='flex flex-col items-center'>
          {/* map function here to pull from DB and create cards for each property */}
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
              <Button>Buy!</Button>
            </CardFooter>
          </Card>
          {/* as seen on TV bar */}

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
        </div>
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
