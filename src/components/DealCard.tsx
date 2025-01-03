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
    <Card>
      <CardHeader>
        <CardTitle>{props.dealNumber}</CardTitle>
        <CardDescription>{props.createdAt}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.address}</p>
        <p>{props.livingArea}</p>
        <p>{props.lot}</p>
        <p>{props.yearBuilt}</p>
        <p>{props.escrow}</p>
        <p>{props.closing}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <p>{props.photo}</p>
      </CardContent>
      <CardContent></CardContent>
      <CardFooter>
        <p>{props.createdAt}</p>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
