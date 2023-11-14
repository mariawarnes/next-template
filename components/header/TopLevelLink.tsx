import Link from 'next/link';
import React from 'react';

import type { TopLevelLinkProps } from '../../types/index';

const TopLevelLink = ({ menu }: TopLevelLinkProps) => (
  <Link
    href={menu.link}
    className="md:hover-underline block px-4 py-2 max-md:px-6 max-md:py-4"
  >
    {menu.title}
  </Link>
);

export default TopLevelLink;
