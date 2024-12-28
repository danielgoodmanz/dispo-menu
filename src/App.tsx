import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import TvBar from '@/components/TvBar';
import { Button } from '@/components/ui/button';

//shadcnui components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// type Deals = {
//   deals: object;
//   setDeals: React.Dispatch<React.SetStateAction<object>>;
// };

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='dealmenu-theme'>
      <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <h1 className='text-2xl font-bold'>
            Saida & Jermaine's Deal-Menu wip 🛠️
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            facilis ipsa. Et impedit laborum minima nisi esse tenetur dolore ad
            iste. Illum, tempora!
          </p>
          <Button>sample</Button>
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
          <TvBar />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// TODO:
// backend XXX
// database serving a schema of property details i.e. XXX
// address, price, arv, etc... XXX
// styling (dark mode toggle!) XXX
// state (context API)
// error handling in the frontend
// routing, mostly SPA experience with <Outlet/>
// UX: allow buyers to express priority interest in a property (toasts!)
// !! auth for Saida & Jermaine, global context here will be used to allow access to CRUD operations
