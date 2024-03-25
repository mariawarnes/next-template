import React from 'react';
import { MdKeyboardCapslock } from 'react-icons/md';

import type { IconProps } from '@/types';

const CapsLockIcon = ({ customStyles, height, width, size }: IconProps) => {
  return (
    <MdKeyboardCapslock
      height={height}
      width={width}
      size={size}
      className={customStyles}
    />
  );
};

export default CapsLockIcon;
