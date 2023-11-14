import React from 'react';

const SkipLink = () => {
  return (
    <a
      id="skip-to-content"
      href="#main-content"
      className="sr-only focus:not-sr-only"
    >
      Skip to content
    </a>
  );
};

export default SkipLink;
