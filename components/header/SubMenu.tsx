'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

import type { SubMenuProps } from '../../types/index';

const SubMenu = ({ menu }: SubMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between px-4 py-2 max-md:w-full max-md:px-6 max-md:py-4"
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
        aria-controls="submenu"
        onClick={handleButtonClick}
        tabIndex={0}
        aria-label={menu.title}
      >
        {menu.title}
        {isMenuOpen ? (
          <HiChevronUp className="ml-2" />
        ) : (
          <HiChevronDown className="ml-2" />
        )}
      </button>
      <ul
        id="submenu"
        className={`left-0 top-full ${
          isMenuOpen ? 'block' : 'hidden'
        } min-w-[200px] space-y-1 bg-custom-bg-light dark:bg-custom-bg-dark md:absolute`}
        role="menu"
      >
        {menu.links.map((link, linkIndex) => (
          <li key={linkIndex} className="max-md:pl-6">
            <Link
              href={link.url}
              className="block px-4 py-2 hover:bg-custom-bg-dark/20 hover:dark:bg-custom-bg-light/20 max-md:px-6 max-md:py-4"
              id={linkIndex === 0 ? 'firstLink' : ''}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
