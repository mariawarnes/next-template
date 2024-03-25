import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const InfoIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaInfoCircle height={height} width={width} className={customStyles} />
  );
};

export default InfoIcon;
