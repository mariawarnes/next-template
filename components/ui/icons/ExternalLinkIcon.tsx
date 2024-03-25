import React from 'react';
import { RxExternalLink } from 'react-icons/rx';

import type { IconProps } from '@/types';

const ExternalLinkIcon = ({
  customStyles,
  height,
  width,
  ariaLabel,
}: IconProps) => {
  return (
    <RxExternalLink
      className={customStyles}
      height={height}
      width={width}
      aria-label={ariaLabel}
    />
  );
};

export default ExternalLinkIcon;
