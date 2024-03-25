import React from 'react';
import { FaBars } from 'react-icons/fa';

import type { IconProps } from '@/types';

const MenuIcon = ({ customStyles, height, width }: IconProps) => {
  return <FaBars height={height} width={width} className={customStyles} />;
};

export default MenuIcon;
