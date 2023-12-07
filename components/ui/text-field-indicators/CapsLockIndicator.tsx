import React from 'react';
import { MdKeyboardCapslock } from 'react-icons/md';

import type { CapsLockIndicatorProps } from '@/types';

const CapsLockIndicator = ({ isCapsLockOn }: CapsLockIndicatorProps) => {
  return (
    <div title="Caps Lock is on">
      {isCapsLockOn && <MdKeyboardCapslock size={30} />}
    </div>
  );
};

export default CapsLockIndicator;
