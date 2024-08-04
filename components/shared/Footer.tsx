import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentY = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image
            src="/assets/images/logo-3.png"
            width={128}
            height={38}
            alt="logo"
          />
        </Link>
        <p>
          &copy; {currentY} SYD Event. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
