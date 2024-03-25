import React from 'react';
import { FaEye } from 'react-icons/fa';

import type { IconProps } from '@/types';

const VisibleIcon = ({ customStyles, height, width, size }: IconProps) => {
  return (
    <FaEye height={height} width={width} size={size} className={customStyles} />
  );
};

export default VisibleIcon;
