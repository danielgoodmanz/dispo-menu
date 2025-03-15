import { SunMoon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import useAppContext from '@/hooks/useAppContext';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const Navbar = () => {
  const { drawerDealFormControl, isAdmin } = useAppContext();
  const { theme, setTheme } = useTheme();
  const { login, register, logout } = useKindeAuth();

  return (
    <nav>
      <div className='flex justify-end gap-6 mb-6 items-center '>
        {isAdmin ? (
          <>
            <Button
              onClick={logout}
              variant={'ghost'}
              className='cursor-pointer'
            >
              Logout
            </Button>
            s
            <Button
              onClick={drawerDealFormControl}
              variant='ghost'
              className='cursor-pointer'
            >
              Add a deal
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => login()}
              variant='ghost'
              className='cursor-pointer'
            >
              Sign in
            </Button>

            <Button
              onClick={() => register()}
              className='cursor-pointer'
              variant='ghost'
            >
              Register
            </Button>
          </>
        )}

        <Button variant='ghost' asChild>
          <Link to={'/'}>Home </Link>
        </Button>

        <Button variant='ghost' asChild>
          <Link to={'/landing'}>Landing </Link>
        </Button>

        <Button
          variant='ghost'
          onClick={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
          className='cursor-pointer'
        >
          <SunMoon />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
