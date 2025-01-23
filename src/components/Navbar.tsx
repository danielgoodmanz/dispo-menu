import { SunMoon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import useAppContext from '@/hooks/useAppContext';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const Navbar = () => {
  const { drawerDealFormControl } = useAppContext();
  const { theme, setTheme } = useTheme();
  const { login, register, logout, getClaim } = useKindeAuth();

  //TODO: export to global context
  //TODO: type this
  const isAdmin = getClaim('roles').value[0].key === 'admin' ? true : false;

  return (
    <nav>
      <div className='flex justify-end gap-6 mb-6 items-center '>
        {isAdmin ? (
          <>
            <Button onClick={logout} variant={'ghost'}>
              Logout
            </Button>

            <Button onClick={drawerDealFormControl} variant='ghost'>
              Add a deal!
            </Button>
          </>
        ) : (
          <>
            {/* TODO: look into Kinde onClick types */}
            <Button onClick={login} variant='ghost'>
              Sign in
            </Button>
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
