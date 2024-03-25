import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import type { IconProps } from '@/types';

const CaretDownIcon = ({ customStyles }: IconProps) => {
  return <FaCaretDown className={customStyles} />;
};

export default CaretDownIcon;
