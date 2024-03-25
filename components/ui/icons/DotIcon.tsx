import React from 'react';
import { FaCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const DotIcon = ({ customStyles, height, width }: IconProps) => {
  return <FaCircle height={height} width={width} className={customStyles} />;
};

export default DotIcon;
