import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useAppContext from '@/hooks/useAppContext';
import React from 'react';

type InterestDialogProps = {
  children: React.ReactNode;
};
const InterestDialog = ({ children }: InterestDialogProps) => {
  const { isDialogOpen, dialogInterestControl } = useAppContext();
  return (
    <Dialog open={isDialogOpen} onOpenChange={dialogInterestControl}>
      <DialogContent>
        {children}
        <DialogHeader>
          <DialogTitle className='text-center text-xl'>
            Who sold this?
          </DialogTitle>
          <DialogDescription className='space-x-6 text-center p-4'>
            <Button type='submit' className='p-6 cursor-pointer text-xs'>
              Saida
            </Button>
            <Button className='p-6 cursor-pointer text-xs'>Jermaine</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InterestDialog;
