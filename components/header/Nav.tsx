'use client';

import { Menu } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';

import { Button, SubMenu, TopLevelLink } from '@/components';
import { menuLinks } from '@/constants';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu as="nav" className="md:flex md:w-full md:flex-row">
      <Button
        label="Toggle Menu"
        Icon={HiBars3}
        handleClick={() => setMenuOpen(!menuOpen)}
        customStyles="text-xl block md:hidden"
      />

      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute left-0 z-10 bg-custom-bg-light dark:bg-custom-bg-dark max-md:w-full max-md:text-xl md:relative md:flex`}
      >
        <div className="min-w-[200px] py-1 md:flex md:flex-row">
          {menuLinks.map((menu, index) => (
            <Fragment key={index}>
              {menu.links ? (
                <SubMenu menu={menu} />
              ) : (
                <TopLevelLink menu={menu} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default Nav;
