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
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InterestDialog;
