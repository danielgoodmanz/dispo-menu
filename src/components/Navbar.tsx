import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
