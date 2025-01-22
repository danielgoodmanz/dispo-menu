import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
