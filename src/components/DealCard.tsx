//shadcn imports
import AppDialog from '@/components/AppDialog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import useAppContext from '@/hooks/useAppContext';
import { HandCoins } from 'lucide-react';
import { Link } from 'react-router';
import { DealProps } from 'types/appTypes';

//this is how you can define the types for the singular mapped object in deals.map()
type DealCardProps = {
  deal: DealProps;
  dealNumber?: number;
};

//TODO: look into this type
const DealCard = ({ deal, dealNumber }: DealCardProps) => {
  const {
    handleDeleteDeal,
    handleCurrentDeal,
    dialogInterestControl,
    appDialogControl,
    isAppDialog,
    isAdmin,
  } = useAppContext();
  const formattedDate = (createdAt: string) => {
    return new Date(createdAt).toLocaleString('en-US', {
      hour: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal #{dealNumber}</CardTitle>
        <CardDescription>
          <span className='italic'>sample 3br/2ba SFH </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Address: {deal.address}</p>
        <p>Living area: {deal.livingArea}</p>
        <p>Lot size: {deal.lot}</p>
        <p>Year built: {deal.yearBuilt}</p>
        <p>Escrow: {deal.escrow}</p>
        <p>Closing: {deal.closing}</p>
        <p>Price: {deal.price}</p>
        <p>Description: {deal.description}</p>
        <p>Photos: {deal.photo}</p>
        {/* createdAt will always exist so we can add a non-null assertion */}
        <p>
          added:{' '}
          {!deal.updatedAt
            ? 'recently updated'
            : deal.updatedAt
            ? formattedDate(deal.updatedAt! as string)
            : formattedDate(deal.createdAt!)}
        </p>
      </CardContent>
      <CardContent></CardContent>
      <CardFooter className='gap-2'>
        <Link to={`interest/${dealNumber}`}>
          {!isAdmin && (
            <Button
              onClick={() => dialogInterestControl()}
              className='bg-yellow-400 hover:bg-yellow-400/90'
            >
              <HandCoins />
              I'm interested!
            </Button>
          )}
        </Link>
        {isAdmin && (
          <>
            <Button onClick={() => handleCurrentDeal(deal)}>Edit</Button>
            <Button variant={'destructive'} onClick={() => appDialogControl()}>
              Delete
            </Button>
          </>
        )}
      </CardFooter>
      {isAppDialog && (
        <AppDialog>
          <Button
            onClick={() => handleDeleteDeal(deal)}
            variant={'destructive'}
            className=''
          >
            Yes
          </Button>
        </AppDialog>
      )}
    </Card>
  );
};

export default DealCard;
