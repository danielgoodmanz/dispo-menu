import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useWeb3Forms from '@web3forms/react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const InterestForm = () => {
  const { dealNumber } = useParams();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      number: '',
      //TODO: make this a pre-written message of deal number selected
      message: `I am interested in deal no.${dealNumber}, please contact me!`,
    },
  });
  const { submit: onSubmit } = useWeb3Forms({
    // load the right user here so that we have the right access key
    access_key: 'bac3c0e1-6240-4c93-a2f5-ad614c4d0a38',
    settings: {
      from_name: 'Deal Menu Visitor',
      subject: 'Interest in a deal',
    },
    onSuccess: (msg) => {
      console.log(msg);
      reset();
    },
    onError: (msg) => {
      console.error(msg);
    },
  });

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-4'
      >
        <Header title={'Interest form'} />

        <Input
          type='text'
          {...register('name', { required: true })}
          placeholder='name'
        ></Input>
        <Input
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'please enter a valid email',
            },
          })}
          placeholder='email'
        ></Input>
        {errors.email && (
          <p className='text-red-400'>error! {errors.email.message}</p>
        )}
        <Input
          type='text'
          {...register('number', {
            required: true,
            minLength: {
              value: 10,
              message: 'please enter a valid phone number',
            },
            maxLength: {
              value: 12,
              message: 'please enter a valid phone number',
            },
          })}
          placeholder='phone number'
        ></Input>
        {errors.number && (
          <p className='text-red-400'>error! {errors.number.message}</p>
        )}
        <Textarea
          {...register('message', { required: true })}
          placeholder='set your message here'
          className='resize-none'
        ></Textarea>
        <Button type='submit'>Send</Button>
      </form>
      <div></div>
    </div>
  );
};

export default InterestForm;
