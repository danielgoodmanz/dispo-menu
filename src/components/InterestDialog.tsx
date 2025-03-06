import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useAppContext from '@/hooks/useAppContext';
import { markSold } from '@/lib/dealUtils';
import React from 'react';
import { useParams } from 'react-router';

type InterestDialogProps = {
  children: React.ReactNode;
};
const InterestDialog = ({ children }: InterestDialogProps) => {
  const { id } = useParams();
  const { isDialogOpen, dialogInterestControl } = useAppContext();
  return (
    <Dialog open={isDialogOpen} onOpenChange={dialogInterestControl}>
      <DialogContent>
        {children}
        <DialogHeader>
          <DialogTitle className='text-center text-xl'>
            Are you sure?
          </DialogTitle>
          <DialogDescription className='space-x-6 text-center p-4'>
            <Button
              onClick={() => markSold(id as string)}
              type='submit'
              className='p-6 cursor-pointer text-xs'
            >
              Sold
            </Button>
            <Button
              className='p-6 cursor-pointer text-xs'
              variant={'secondary'}
            >
              Not sold
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InterestDialog;
