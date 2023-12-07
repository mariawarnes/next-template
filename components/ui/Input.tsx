'use client';

import React, { useState } from 'react';

import { CapsLockIndicator, PasswordToggle } from '@/components';
import type { InputProps } from '@/types';

const Input = ({
  id,
  type,
  value,
  handleChange,
  label,
  required,
  placeholderStyles,
  inputStyles,
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevIsVisible => !prevIsVisible);
  };

  const checkCapsLock = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isCapsLockPressed = e.getModifierState('CapsLock');
    setIsCapsLockOn(isCapsLockPressed);
  };

  return (
    <div className="relative mb-6">
      <label
        htmlFor={id}
        className={`${placeholderStyles} absolute left-2 rounded-md px-2 transition-all ${
          // If there is text in the input move the placeholder up and on top
          inputValue ? '-top-3 z-10 opacity-100' : 'top-3 -z-10 opacity-80'
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          required={required}
          id={id}
          className={`${inputStyles} w-full appearance-none rounded-md border-[2px] bg-transparent p-3`}
          // Set the type attribute based on the visibility if a password field or just to text if a text field
          type={
            isPasswordVisible
              ? 'text'
              : type === 'password'
              ? 'password'
              : 'text'
          }
          value={value}
          onChange={e => {
            handleChange(e), setInputValue(e.target.value), checkCapsLock;
          }}
          onKeyUp={checkCapsLock}
        />
        <div className="absolute right-0 top-0 flex p-3">
          {/* Hide/Show Password Button */}
          {type == 'password' && (
            <PasswordToggle
              isPasswordVisible={isPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          )}
          {/* Caps Lock Indicator */}
          <CapsLockIndicator isCapsLockOn={isCapsLockOn} />
        </div>
      </div>
    </div>
  );
};

export default Input;
