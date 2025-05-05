import { Button } from '@/components/ui/button';
import Link from 'next/link';
import UserButton from './user-button';
import { ShoppingCart } from 'lucide-react';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <Button asChild variant={'ghost'}>
          <Link href={'/shop'}>
            <ShoppingCart />
            Shop
          </Link>
        </Button>
        <UserButton />
        <nav className="md:hidden"></nav>
      </nav>
      <nav></nav>
    </div>
  );
};

export default Menu;
