import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from '@/components/ui/drawer';
import useAppContext from '@/hooks/useAppContext';

type FormDrawerProps = {
  children: React.ReactNode;
};

const FormDrawer = ({ children }: FormDrawerProps) => {
  const { open, drawerDealFormControl } = useAppContext();
  return (
    <Drawer open={open} onOpenChange={drawerDealFormControl} direction='right'>
      <DrawerContent>
        {children}
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FormDrawer;
