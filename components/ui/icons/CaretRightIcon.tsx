import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

import type { IconProps } from '@/types';

const CaretRightIcon = ({ customStyles }: IconProps) => {
  return <FaCaretRight className={customStyles} />;
};

export default CaretRightIcon;
