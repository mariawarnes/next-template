import React from 'react';
import { FaFolderPlus } from 'react-icons/fa';

import type { IconProps } from '@/types';

const FolderPlusIcon = ({ customStyles, height, width }: IconProps) => {
  return (
    <FaFolderPlus height={height} width={width} className={customStyles} />
  );
};

export default FolderPlusIcon;
