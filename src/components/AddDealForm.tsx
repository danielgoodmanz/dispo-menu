import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

const AddDealForm = () => {
  // zod schema
  // create an object schema with validation & error messages built in
  const dealFormSchema = z.object({
    address: z
      .string()
      .min(5, 'Address must be at least 5 chars')
      .max(50, 'Address must not exceed 50 chars'),
    livingArea: z.string(),
    lot: z.string(),
    yearBuilt: z.string().min(4, 'Year must be 4 chars').max(4),
    escrow: z.string(),
    closing: z.string().max(12, 'Closing must not exceed 12 chars'),
    price: z.string(),
    description: z.string(),
    photo: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //passing the resolver to useForm allows zod to connect to react-hook-form
  } = useForm({ resolver: zodResolver(dealFormSchema) });

  const onSubmit = async (data) => {
    /// TODO: PUT request to the server
    console.log(data);

    reset();
  };

  return (
    <div>
      <h1>Add a deal form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2'
        action=''
      >
        <input {...register('address')} type='text' placeholder='Address' />
        <input
          {...register('livingArea')}
          type='text'
          placeholder='Living area'
        />
        <input {...register('lot')} type='text' placeholder='Lot' />
        <input
          {...register('yearBuilt')}
          type='text'
          placeholder='Year built'
        />
        {/* errors must go directly after input for respective field */}
        {errors.yearBuilt && <p>{errors.yearBuilt.message}</p>}
        <input {...register('escrow')} type='text' placeholder='Escrow' />
        <input {...register('closing')} type='text' placeholder='Closing' />
        <input {...register('price')} type='text' placeholder='Price' />
        <input
          {...register('description')}
          type='text'
          placeholder='Description'
        />
        <input {...register('photo')} type='text' placeholder='Photo link' />
        <Button type='submit'>send</Button>
      </form>
    </div>
  );
};

export default AddDealForm;
