import { SunMoon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import useAppContext from '@/hooks/useAppContext';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const Navbar = () => {
  const { drawerDealFormControl, isAdmin } = useAppContext();
  const { theme, setTheme } = useTheme();
  const { login, register, logout, user } = useKindeAuth();

  return (
    <nav>
      <div className='flex justify-end gap-6 mb-6 items-center '>
        {isAdmin ? (
          <>
            <Button onClick={logout} variant={'ghost'}>
              Logout
            </Button>
            <Link to={`/${user?.given_name}`}>
              <Button variant={'ghost'}>My deals</Button>
            </Link>
            <Button onClick={drawerDealFormControl} variant='ghost'>
              Add a deal!
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() =>
                login({
                  app_state: {
                    redirectTo: '/:user',
                  },
                })
              }
              variant='ghost'
              className='cursor-pointer'
            >
              Sign in
            </Button>

            <Button
              // @ts-expect-error unknown type for Kinde function
              onClick={register}
              className='cursor-pointer'
              variant='ghost'
            >
              Register
            </Button>
          </>
        )}

        <Button variant='ghost'>
          <Link to={'/'}>Home </Link>
        </Button>

        <Button variant='ghost'>
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
