import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useAppContext from '@/hooks/useAppContext';

type AppDialogProps = {
  children?: React.ReactNode;
};

const AppDialog = ({ children }: AppDialogProps) => {
  const { isAppDialog, appDialogControl } = useAppContext();
  // TODO: clean this up make Dialogs more generic & useable instead of hardcoding content
  return (
    <Dialog open={isAppDialog} onOpenChange={appDialogControl}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className='text-center'>
            This action cannot be undone.
          </DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
