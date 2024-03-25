import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const InvalidIcon = ({ customStyles, height, width, size }: IconProps) => {
  return (
    <FaTimesCircle
      height={height}
      width={width}
      size={size}
      className={customStyles}
    />
  );
};

export default InvalidIcon;
