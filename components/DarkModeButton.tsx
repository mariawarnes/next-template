'use client';

import React from 'react';
import { useTheme } from 'next-themes';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="px-4 py-2 text-white dark:text-primary-blue-dark bg-primary-blue-dark dark:bg-white font-semibold rounded-md"
      aria-label="Toggle Dark Mode"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default DarkModeButton;
