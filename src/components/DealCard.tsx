    //shadcn imports
import AppDialog from '@/components/AppDialog';
import { Badge } from '@/components/ui/badge';
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
import { formattedDate, isDealAddedToday } from '@/lib/dealUtils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CircleDollarSign } from 'lucide-react';
import { memo } from 'react';
import { DealProps } from 'types/appTypes';

//this is how you can define the types for the singular mapped object in deals.map()
type DealCardProps = {
  deal: DealProps;
  dealNumber?: number;
};

const DealCard = ({ deal, dealNumber }: DealCardProps) => {
  const { handleCurrentDeal, appDialogControl, isAppDialog, isAdmin, toast } =
    useAppContext();

  //call query
  const queryClient = useQueryClient();
  //query mutation handler
  const deleteDealMutation = useMutation({
    mutationFn: async (deal: DealProps) => {
      const response = await fetch(
        `https://dispo-menu-backend.onrender.com/delete/${deal._id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) throw new Error('Error when deleting deal');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['deals'],
      });
      toast({
        description: 'Succesfully deleted deal',
        variant: 'destructive',
      });
    },
    onError: (error) => {
      toast({
        description: `${error?.message}`,
        variant: 'destructive',
      });
    },
  });

  // lets add the markSold utility function to useMutation in order to query for fresh data
  const handleSoldMutation = useMutation({
    mutationFn: async (deal: DealProps) => {
      try {
        await fetch(
          `https://dispo-menu-backend.onrender.com/marksold/${deal._id}`,
          {
            method: 'PUT',
            body: !deal.isSold
              ? JSON.stringify({ isSold: true })
              : JSON.stringify({ isSold: false }),
            headers: { 'content-type': 'application/json' },
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['deals'],
      });
    },
    onError: (error) => {
      toast({
        description: `${error?.message}`,
        variant: 'destructive',
      });
    },
  });

  return (
    <Card className='relative'>
      {deal.isSold && (
        <div className='bg-red-400 absolute w-full h-full z-10 opacity-80'>
          {/* TODO: try centering this challenge relative to card */}
          <p className='text-2xl font-extrabold absolute left-[44%] top-[44%] -rotate-45'>
            SOLD!
          </p>
        </div>
      )}
      <CardHeader className='relative'>
        <CardTitle>Deal #{dealNumber}</CardTitle>
        <CardDescription>
          <span className='italic'>{deal.propertyType}</span>
        </CardDescription>
        {isDealAddedToday(deal) && (
          <Badge
            className='absolute right-5 bg-yellow-400'
            variant={'secondary'}
          >
            new
          </Badge>
        )}
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
        <p>
          Added/updated:{' '}
          {deal.updatedAt
            ? formattedDate(deal.updatedAt!)
            : 'recently modified'}
        </p>
      </CardContent>
      <CardContent></CardContent>
      <CardFooter className='gap-2'>
        {isAdmin && (
          <>
            <Button
              onClick={() => handleSoldMutation.mutateAsync(deal)}
              className='bg-yellow-400 cursor-pointer hover:bg-yellow-400/90 z-20'
            >
              <CircleDollarSign />
              {deal.isSold ? 'Mark available' : 'Mark sold'}
            </Button>
            <Button
              onClick={() => handleCurrentDeal(deal)}
              className='cursor-pointer'
            >
              Edit
            </Button>
            <Button
              variant={'destructive'}
              onClick={() => appDialogControl()}
              className='cursor-pointer z-20'
            >
              Delete
            </Button>
          </>
        )}
      </CardFooter>
      {isAppDialog && (
        <AppDialog>
          <Button
            onClick={() => {
              deleteDealMutation.mutateAsync(deal);
              appDialogControl();
            }}
            variant={'destructive'}
            className='cursor-pointer'
          >
            Yes
          </Button>
        </AppDialog>
      )}
    </Card>
  );
};

export default memo(DealCard);
