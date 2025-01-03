import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '@/components/Header';

const AddDealForm = () => {
  // zod schema
  // create an object schema with validation & error messages built in
  const dealFormSchema = z.object({
    address: z
      .string()
      .min(5, 'Address must be at least 5 chars')
      .max(50, 'Address must not exceed 50 chars'),
    livingArea: z
      .string()
      .min(3, 'Living area must be at least 3 chars')
      .max(10, 'Living area must not exceed 10 chars'),
    lot: z
      .string()
      .min(3, 'Lot must be at least 3 chars')
      .max(10, 'Lot must not exceed 10 chars'),
    yearBuilt: z.string().min(4, 'Year must be 4 chars').max(4),
    escrow: z.string().max(12, 'Escrow must not exceed 12 chars'),
    closing: z.string().max(12, 'Closing must not exceed 12 chars'),
    price: z
      .string()
      .min(3, 'Price must be at least 3 chars')
      .max(10, 'Price must not exceed 10 chars'),
    description: z.string().max(800, "Description can't exceed 800 chars"),
    photo: z.string().url('Photo must be a valid URL'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
      <Header title={'Add a deal form!'} />
      {/* TODO: Add isSubmitting state (maybe from useForm?) */}
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
        {errors.address && <p>{errors.address.message}</p>}
        <input {...register('lot')} type='text' placeholder='Lot' />
        {errors.lot && <p>{errors.lot.message}</p>}
        <input
          {...register('yearBuilt')}
          type='text'
          placeholder='Year built'
        />
        {/* errors must go directly after input for respective field */}
        {errors.yearBuilt && <p>{errors.yearBuilt.message}</p>}
        <input {...register('escrow')} type='text' placeholder='Escrow' />
        {errors.escrow && <p>{errors.escrow.message}</p>}
        <input {...register('closing')} type='text' placeholder='Closing' />
        {errors.closing && <p>{errors.closing.message}</p>}
        <input {...register('price')} type='text' placeholder='Price' />
        {errors.price && <p>{errors.price.message}</p>}
        <input
          {...register('description')}
          type='text'
          placeholder='Description'
        />
        {errors.description && <p>{errors.description.message}</p>}
        <input {...register('photo')} type='text' placeholder='Photo link' />
        {errors.photo && <p>{errors.photo.message}</p>}
        <Button disabled={isSubmitting} type='submit'>
          Submit
        </Button>
        {/* look into Object.keys() here as a way to contain all errors in one place */}
      </form>
    </div>
  );
};

export default AddDealForm;
