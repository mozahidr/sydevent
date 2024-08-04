import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from "@/components/ui/separator"
import { CgMenuRightAlt } from 'react-icons/cg';
import Image from 'next/image';
import { NavItems } from './NavItems';

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle p-1 rounded-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground">
          <CgMenuRightAlt size={24} className="lg:hidden" />
          <span className="sr-only">Toggle navigation</span>
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <Image 
            src='/assets/images/logo-3.png'
            alt='logo'
            width={128}
            height={38}
          />
          <Separator className='border border-gray-50' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
