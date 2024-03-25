import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import type { IconProps } from '@/types';

// If changing this, please also change in globals.css:
// ul.arrows {
//   list-style-image: url('arrow-right-solid.svg');
// }

const RightArrowIcon = ({ height, width, customStyles }: IconProps) => {
  return (
    <FaArrowRight height={height} width={width} className={customStyles} />
  );
};

export default RightArrowIcon;
