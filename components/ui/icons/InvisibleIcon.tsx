import React from 'react';
import { FaEyeSlash } from 'react-icons/fa';

import type { IconProps } from '@/types';

const InvisibleIcon = ({ customStyles, height, width, size }: IconProps) => {
  return (
    <FaEyeSlash
      height={height}
      width={width}
      size={size}
      className={customStyles}
    />
  );
};

export default InvisibleIcon;
