import React from 'react';
import { CapsLockIcon } from '@/components';

import type { CapsLockIndicatorProps } from '@/types';

const CapsLockIndicator = ({ isCapsLockOn }: CapsLockIndicatorProps) => {
  return (
    <div title="Caps Lock is on">
      {isCapsLockOn && <CapsLockIcon size={30} />}
    </div>
  );
};

export default CapsLockIndicator;
