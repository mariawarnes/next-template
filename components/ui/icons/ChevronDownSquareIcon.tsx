import React from 'react';
import { LuChevronDownSquare } from 'react-icons/lu';

import type { IconProps } from '@/types';

const ChevronDownSquareIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <LuChevronDownSquare
      height={height}
      width={width}
      className={customStyles}
    />
  );
};

export default ChevronDownSquareIcon;
