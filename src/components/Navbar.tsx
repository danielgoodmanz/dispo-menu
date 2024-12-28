import { SunMoon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav>
      <ul className='flex justify-end space-x-6'>
        <li>
          <Button variant='ghost'>Home</Button>
        </li>
        <li>
          <Button variant='ghost'>Deals</Button>
        </li>
        <li>
          <Button variant='ghost'>Sign in</Button>
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
