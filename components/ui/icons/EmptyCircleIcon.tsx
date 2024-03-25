import React from 'react';
import { FaRegCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const EmptyCircleIcon = ({ customStyles, height, width }: IconProps) => {
  return <FaRegCircle height={height} width={width} className={customStyles} />;
};

export default EmptyCircleIcon;
