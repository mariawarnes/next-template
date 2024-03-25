import React from 'react';
import { FaCaretUp } from 'react-icons/fa';

import type { IconProps } from '@/types';

const CaretUpIcon = ({ customStyles }: IconProps) => {
  return <FaCaretUp className={customStyles} />;
};

export default CaretUpIcon;
