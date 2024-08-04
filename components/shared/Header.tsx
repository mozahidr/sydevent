import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavItems } from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="w-full border-b shadow-lg">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo-3.png"
            width={128}
            height={38}
            alt="logo"
          />
        </Link>
        {/* Large device navbar */}
        <SignedIn>
          <nav className="md:flex-between w-full max-w-xs hidden">
            <NavItems />
          </nav>
        </SignedIn>
        {/* Login and Sign out button */}
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            {/* Mobile Navbar */}
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
