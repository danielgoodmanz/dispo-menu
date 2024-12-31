import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

const AddDealForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <h1>Add a deal form</h1>
      <form action=''>
        <div className='flex flex-col'>
          <input type='text' placeholder='hello' />
          <input type='text' placeholder='hello' />
          <input type='text' placeholder='hello' />
          <Button type='submit'>send</Button>
        </div>
      </form>
    </div>
  );
};

export default AddDealForm;
