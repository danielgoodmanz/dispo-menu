//shadcn imports
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const DealCard = (props) => {
  return (
    <Card onClick={props.onClick}>
      <CardHeader>
        <CardTitle>Deal #{props.dealNumber}</CardTitle>
        <CardDescription>
          <span className='italic'>added </span>
          {props.createdAt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Address: {props.address}</p>
        <p>Living area: {props.livingArea}</p>
        <p>Lot size: {props.lot}</p>
        <p>Year built: {props.yearBuilt}</p>
        <p>Escrow: {props.escrow}</p>
        <p>Closing: {props.closing}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
        <p>Photos: {props.photo}</p>
      </CardContent>
      <CardContent></CardContent>
      <CardFooter>
        <span className='italic'>added {props.createdAt}</span>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
