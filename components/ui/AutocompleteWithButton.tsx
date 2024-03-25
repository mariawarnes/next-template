'use client';

import React from 'react';

import { Autocomplete } from '@/components';
import type { AutocompleteWithButtonProps } from '@/types';

const AutocompleteWithButton = ({
  placeholder,
  btnText,
  btnLabel,
  btnDisabled,
  customStyles,
  btnCustomStyles,
  btnType,
  handleClick,
  data,
}: AutocompleteWithButtonProps) => {
  return (
    <div className={`flex w-full  ${customStyles}`}>
      <Autocomplete placeholder={placeholder} data={data} />

      <button
        className={`${
          btnCustomStyles ? btnCustomStyles : ''
        } custom-button ${
          btnDisabled && `cursor-not-allowed opacity-50`
        }`}
        disabled={btnDisabled}
        title={btnText !== '' ? '' : btnLabel}
        aria-label={btnLabel}
        onClick={handleClick}
        type={btnType}
      >
        {btnText}
      </button>
    </div>
  );
};

export default AutocompleteWithButton;
