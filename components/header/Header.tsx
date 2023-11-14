import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { DarkModeSelect, Nav } from '@/components';
import { companyName } from '@/constants';

const Header = () => {
  return (
    <header className="z-40 w-full p-6 ">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt={`${companyName} Logo`}
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex flex-row items-center justify-end">
          <DarkModeSelect />
      <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
