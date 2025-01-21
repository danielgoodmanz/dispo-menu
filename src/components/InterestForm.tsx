import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

const InterestForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default InterestForm;
