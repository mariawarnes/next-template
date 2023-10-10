'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeButton from './DarkModeButton';
import { menuLinks } from '../constants';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import CustomButton from './CustomButton';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full fixed  z-20">
      <nav className="mx-auto max-w-[1440px] p-6 flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="flex flex-row">
          <DarkModeButton />

          <Menu as="nav" className="relative lg:w-full lg:flex lg:flex-row">
            <CustomButton
              label="Toggle Menu"
              Icon={Bars3Icon}
              handleClick={() => setMenuOpen(!menuOpen)}
              customStyles="block lg:hidden"
            />

            <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } absolute lg:relative lg:flex z-10 right-0 origin-top-right  `}
            >
              <div className="py-1 lg:flex lg:flex-row ">
                {menuLinks.map((menu, index) => (
                  <Fragment key={index}>
                    {menu.links ? (
                      <div className="relative group">
                        <span className="group flex items-center px-4 py-2">
                          {menu.title}
                        </span>
                        <ul className="hidden lg:absolute left-0 top-full mt-2 space-y-1  group-hover:block">
                          {menu.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link
                                href={link.url}
                                className="block px-4 lg:py-0 py-2"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link href={menu.link} className="block px-4 py-2">
                        {menu.title}
                      </Link>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
