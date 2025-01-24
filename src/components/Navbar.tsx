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
            {/* allow redirecting to any URL after login */}
            <Button
              onClick={() =>
                login({
                  app_state: {
                    redirectTo: '/:user',
                  },
                })
              }
              variant='ghost'
            >
              Sign in
            </Button>
            {/* @ts-expect-error unknown type for handler below */}
            <Button onClick={register} variant='ghost'>
              Register
            </Button>
          </>
        )}

        <Link to={'/'}>
          <Button variant='ghost'>Home</Button>
        </Link>

        <Link to={'/landing'}>
          <Button variant='ghost'>Landing</Button>
        </Link>

        <Button
          variant='ghost'
          onClick={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          <SunMoon />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
