import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { UserNav } from '@/components/user-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button asChild variant="outline">
              <Link href="/sign-in">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
