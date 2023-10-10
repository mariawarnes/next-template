'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import CustomButton from './CustomButton';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <CustomButton
      Icon={theme === 'light' ? MoonIcon : SunIcon}
      label="Toggle Light/Dark Mode"
      handleClick={handleToggle}
    />
  );
};

export default DarkModeButton;
