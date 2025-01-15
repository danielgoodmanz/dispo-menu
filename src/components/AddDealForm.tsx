import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import useAppContext from '@/hooks/useAppContext';

const AddDealForm = () => {
  const { currentDeal, setCurrentDeal } = useAppContext();
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

  //infer input types from the schema defined above
  type FormValues = z.infer<typeof dealFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    //passing the resolver to useForm allows zod to connect to react-hook-form
  } = useForm({
    resolver: zodResolver(dealFormSchema),
    defaultValues: currentDeal
      ? {
          address: currentDeal.address,
          livingArea: currentDeal.livingArea,
          lot: currentDeal.lot,
          yearBuilt: currentDeal.yearBuilt,
          escrow: currentDeal.escrow,
          closing: currentDeal.closing,
          price: currentDeal.price,
          description: currentDeal.description,
          photo: currentDeal.photo,
        }
      : undefined,
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: add a if check for put/post request
    if (currentDeal) {
      try {
        const response = await fetch(
          `http://localhost:3000/update/${currentDeal._id}`,
          {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' },
          }
        );
        if (response.ok) {
          console.log(`successfully edited deal with id ${currentDeal._id}`);
          setCurrentDeal(undefined);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await fetch('http://localhost:3000/add', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          console.log(`successfully added deal with ${data}`);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    }

    console.log(data);

    reset();
  };

  return (
    <div>
      <Header title={'Add a deal form!'} />
      {/* TODO: Add isSubmitting state (maybe from useForm?) */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-2'
        // you need to set these below otherwise the form does.. nothing
        method='post'
        action='/add'
      >
        <Input {...register('address')} type='text' placeholder='Address' />
        <Input
          {...register('livingArea')}
          type='text'
          placeholder='Living area'
        />
        {errors.address && <p>{errors.address.message}</p>}
        <Input {...register('lot')} type='text' placeholder='Lot' />
        {errors.lot && <p>{errors.lot.message}</p>}
        <Input
          {...register('yearBuilt')}
          type='text'
          placeholder='Year built'
        />
        {/* errors must go directly after input for respective field */}
        {errors.yearBuilt && <p>{errors.yearBuilt.message}</p>}
        <Input {...register('escrow')} type='text' placeholder='Escrow' />
        {errors.escrow && <p>{errors.escrow.message}</p>}
        <Input {...register('closing')} type='text' placeholder='Closing' />
        {errors.closing && <p>{errors.closing.message}</p>}
        <Input {...register('price')} type='text' placeholder='Price' />
        {errors.price && <p>{errors.price.message}</p>}
        <Input
          {...register('description')}
          type='text'
          placeholder='Description'
        />
        {errors.description && <p>{errors.description.message}</p>}
        <Input {...register('photo')} type='text' placeholder='Photo link' />
        {errors.photo && <p>{errors.photo.message}</p>}
        {/* TODO: error - in HTML, button cannot be a descendant of button */}
        <Button disabled={isSubmitting} type='submit'>
          Submit
        </Button>
        {/* look into Object.keys() here as a way to contain all errors in one place */}
      </form>
    </div>
  );
};

export default AddDealForm;

//TODO: to add editing functionality we need to create
//an edit state XXX enable that edit state XXX pull up the adddealform via drawer XXX
//then,
// populate defaultValues where deal id matches XXX DONE
//
