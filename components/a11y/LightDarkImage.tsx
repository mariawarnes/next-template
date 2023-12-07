import Image from 'next/image';
import React from 'react';

import type { LightDarkImageProps } from '@/types';

const LightDarkImage = ({
  lightImage,
  darkImage,
  alt,
  width,
  height,
  className,
  priority,
  title,
}: LightDarkImageProps) => {
  return (
    <>
      <Image
        src={darkImage}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        title={title}
        className={`hidden dark:block ${className}`}
      />
      <Image
        src={lightImage}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        title={title}
        className={`dark:hidden ${className}`}
      />
    </>
  );
};

export default LightDarkImage;
