import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const UserCircleIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaRegUserCircle height={height} width={width} className={customStyles} />
  );
};

export default UserCircleIcon;
