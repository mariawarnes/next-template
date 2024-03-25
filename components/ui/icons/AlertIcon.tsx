import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import type { IconProps } from '@/types';

const AlertIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaExclamationCircle
      height={height}
      width={width}
      className={customStyles}
    />
  );
};

export default AlertIcon;
