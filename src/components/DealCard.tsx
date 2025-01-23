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
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
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
  } = useAppContext();
  const { getClaim } = useKindeAuth();
  //TODO: export to global context
  type getClaimType = {
    roles:
      | {
          key: string;
        }[]
      | null;
  };

  const claim = getClaim('roles') as getClaimType | null;
  const isAdmin = claim?.roles?.[0]?.key === 'admin' ? true : false;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal #{dealNumber}</CardTitle>
        <CardDescription>
          <span className='italic'>added </span>
          {deal.createdAt}
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
      </CardContent>
      <CardContent></CardContent>
      <CardFooter className='gap-2'>
        <Link to={`/interest/${dealNumber}`}>
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
          >
            Yes
          </Button>
        </AppDialog>
      )}
    </Card>
  );
};

export default DealCard;
