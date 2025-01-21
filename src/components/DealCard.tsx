//shadcn imports
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
  const { handleDeleteDeal, handleCurrentDeal, dialogInterestControl } =
    useAppContext();
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
          <Button
            onClick={() => dialogInterestControl()}
            className='bg-yellow-400 hover:bg-yellow-400/90'
          >
            <HandCoins />
            I'm interested!
          </Button>
        </Link>
        <Button onClick={() => handleCurrentDeal(deal)}>Edit</Button>
        <Button onClick={() => handleDeleteDeal(deal)} variant={'destructive'}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
