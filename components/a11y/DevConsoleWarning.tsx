'use client'; // Otherwise the warning won't show on the client browser
import React, { useEffect } from 'react';

const DevConsoleWarning = () => {
  useEffect(() => {
    // Log a styled warning message to the console when the component mounts
    console.log(
      '%cStop!',
      'color: red; font-size: 40px; font-weight: bold; font-family: Verdana;',
    );
    console.log(
      '%cThis is a browser feature intended for developers. Attackers can attempt to steal your information by asking you to enter code here.',
      'font-size: 20px; font-family: Verdana;',
    );
    console.log(
      '%cDo not enter or paste anything here that you do not understand.',
      'font-size: 20px; font-family: Verdana;',
    );
    console.log(
      '%cSee https://wikipedia.org/wiki/Self-XSS for more information.',
      'font-size: 20px; font-family: Verdana;',
    );
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return <></>;
};
// TODO: Figure out why this is appearing twice
export default DevConsoleWarning;
