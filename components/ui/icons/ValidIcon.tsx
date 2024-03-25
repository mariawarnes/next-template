import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const ValidIcon = ({ customStyles, height, width, size }: IconProps) => {
  return (
    <FaCheckCircle
      height={height}
      width={width}
      size={size}
      className={customStyles}
    />
  );
};

export default ValidIcon;
