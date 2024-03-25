import React from 'react';

import { InvalidIcon, ValidIcon } from '@/components';
import type { isValidIndicatorProps } from '@/types';

const ValidIndicator = ({ isValid }: isValidIndicatorProps) => {
  return (
    <>
      <div title="Valid input" className="mt-1">
        {isValid && <ValidIcon customStyles="text-valid" size={20} />}
      </div>
      <div title="Invalid input" className="mt-1">
        {!isValid && <InvalidIcon customStyles="text-error" size={20} />}
      </div>
    </>
  );
};

export default ValidIndicator;
