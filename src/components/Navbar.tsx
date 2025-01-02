import { SunMoon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const Navbar = ({ drawerDealFormControl }) => {
  const { theme, setTheme } = useTheme();
  return (
    <nav>
      <ul className='flex justify-end space-x-6'>
        <li>
          <Link to={'/'}>
            <Button variant='ghost'>Home</Button>
          </Link>
        </li>
        <li>
          <Button variant='ghost'>Deals</Button>
        </li>
        <li>
          <Button variant='ghost'>Sign in</Button>
        </li>
        <li>
          <Button onClick={drawerDealFormControl} variant='ghost'>
            Add a deal!
          </Button>
        </li>
        <li>
          <Button
            variant='ghost'
            onClick={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }
          >
            <SunMoon />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
