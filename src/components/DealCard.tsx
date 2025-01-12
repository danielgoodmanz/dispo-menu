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

const DealCard = ({
  deal,
  handleDelete,
  dealNumber,
  currentDeal,
  setCurrentDeal,
  drawerDealFormControl,
}) => {
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
        {/* <p>Address: {props.address}</p>
        <p>Living area: {props.livingArea}</p>
        <p>Lot size: {props.lot}</p>
        <p>Year built: {props.yearBuilt}</p>
        <p>Escrow: {props.escrow}</p>
        <p>Closing: {props.closing}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
        <p>Photos: {props.photo}</p> */}
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
      <CardFooter>
        <span className='italic'>added {deal.createdAt}</span>
        <Button
          onClick={() => {
            setCurrentDeal(deal);
            drawerDealFormControl();
          }}
        >
          Edit
        </Button>
        <Button onClick={() => handleDelete(deal)} variant={'destructive'}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
