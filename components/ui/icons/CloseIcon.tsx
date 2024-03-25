import React from 'react';
import { FaTimes } from 'react-icons/fa';

import type { IconProps } from '@/types';

const CloseIcon = ({ customStyles, height, width }: IconProps) => {
  return <FaTimes height={height} width={width} className={customStyles} />;
};

export default CloseIcon;
