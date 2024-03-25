import React from 'react';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';

import type { IconProps } from '@/types';

const InboxIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <HiMiniInboxArrowDown
      height={height}
      width={width}
      className={customStyles}
    />
  );
};

export default InboxIcon;
