import React from 'react';
import { FaCheck } from 'react-icons/fa';

import type { IconProps } from '@/types';

const CheckIcon = ({ customStyles, height, width }: IconProps) => {
  return <FaCheck height={height} width={width} className={customStyles} />;
};

export default CheckIcon;
