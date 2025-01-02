import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useRouteError } from 'react-router';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='flex flex-col items-center justify-center min-h-screen space-y-4'
    >
      <Header title={'Oops!'} />
      <p>Sorry, page not found!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button variant='ghost' className='text-2xl'>
        Take me back ✋
      </Button>
    </div>
  );
}
