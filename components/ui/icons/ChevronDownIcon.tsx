import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import type { IconProps } from '@/types';

const ChevronDownIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaChevronDown height={height} width={width} className={customStyles} />
  );
};

export default ChevronDownIcon;
