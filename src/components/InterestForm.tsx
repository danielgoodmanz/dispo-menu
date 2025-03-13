import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useAppContext from '@/hooks/useAppContext';
import useWeb3Forms from '@web3forms/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

// can import as a util function
const getAgentAccessKey = (agent: string): string => {
  if (agent === 'saida') return 'aec2dc3e-9fc7-4946-bf83-3a0061c83b5c';
  if (agent === 'jermaine') return 'key';
  if (agent === 'daniel') return 'bac3c0e1-6240-4c93-a2f5-ad614c4d0a38';
  return '';
};

const InterestForm = () => {
  // local state for this form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dealNumber, agent } = useParams();
  const { dialogInterestControl } = useAppContext();
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
      message: `I am interested in deal no.${dealNumber}, please contact me!`,
    },
  });
  const { submit: onSubmit } = useWeb3Forms({
    // load the right user here so that we have the right access key
    access_key: getAgentAccessKey(agent as string),
    settings: {
      from_name: 'Deal Menu Visitor',
      subject: 'Interest in a deal',
    },

    onSuccess: (msg) => {
      setIsSubmitting(false);
      console.log(msg);
      reset();
      dialogInterestControl();
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
        <Button
          type='submit'
          className='cursor-pointer'
          disabled={isSubmitting}
          onSubmit={() => setIsSubmitting(true)}
        >
          Send
        </Button>
      </form>
      {}
    </div>
  );
};

export default InterestForm;
