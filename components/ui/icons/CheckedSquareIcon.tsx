import React from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';

import type { IconProps } from '@/types';

const CheckedSquareIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaRegCheckSquare height={height} width={width} className={customStyles} />
  );
};

export default CheckedSquareIcon;
