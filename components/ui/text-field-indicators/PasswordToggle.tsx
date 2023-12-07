import React from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

import type { PasswordToggleProps } from '@/types';

const PasswordToggle = ({
  isPasswordVisible,
  togglePasswordVisibility,
}: PasswordToggleProps) => {
  return (
    <button
      type="button"
      className=""
      onClick={togglePasswordVisibility}
      aria-label={isPasswordVisible ? 'Hide Password' : 'Show Password'}
      aria-pressed={isPasswordVisible ? 'true' : 'false'}
    >
      {isPasswordVisible ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}
    </button>
  );
};

export default PasswordToggle;
