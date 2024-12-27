// logo imports
import ABC from '@/assets/ABC.svg';
import CBS from '@/assets/CBS.svg';
import FOX from '@/assets/FOX.svg';
import NBC from '@/assets/NBC.svg';
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

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-2xl font-bold'>
        Saida & Jermaine's Deal-Menu wip 🛠️
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, facilis
        ipsa. Et impedit laborum minima nisi esse tenetur dolore ad iste. Illum,
        tempora!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, facilis
        ipsa. Et impedit laborum minima nisi esse tenetur dolore ad iste. Illum,
        tempora!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, facilis
        ipsa. Et impedit laborum minima nisi esse tenetur dolore ad iste. Illum,
        tempora!
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
      {/* 'as seen on' bar */}
      <div id='tv-bar' className='flex flex-row items-center bg-primary'>
        <p>As Seen On</p>
        <img src={ABC} alt='' />
        <img src={CBS} alt='' />
        <img src={FOX} alt='' />
        <img src={NBC} alt='' />
      </div>
    </div>
  );
}

export default App;

// TODO:
// backend XXX
// database serving a schema of property details i.e.
// address, price, arv, etc... XXX
// state (context API)
// styling (dark mode toggle!)
// error handling
// routing, mostly SPA experience with <Outlet/> use
// UX: allow buyers to express priority interest in a property (toasts!)
// borrow navbar from glossary
// !! auth for Saida & Jermaine
