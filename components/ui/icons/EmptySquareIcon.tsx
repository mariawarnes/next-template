import React from 'react';
import { FaRegSquareFull } from 'react-icons/fa6';

import type { IconProps } from '@/types';

const EmptySquareIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaRegSquareFull height={height} width={width} className={customStyles} />
  );
};

export default EmptySquareIcon;
