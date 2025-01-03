import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <div
      id='error-page'
      className='flex flex-col items-center justify-center min-h-screen space-y-4'
    >
      <Header title={'Oops!'} />
      <p>Sorry, page not found</p>
      <Link to={'/'}>
        <Button variant='ghost' className='text-2xl'>
          Take me back ✋
        </Button>
      </Link>
    </div>
  );
}
