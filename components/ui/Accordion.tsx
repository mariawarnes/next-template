'use client';

import React, { useEffect, useState } from 'react';

import { ChevronDownSquareIcon } from '@/components';
import type { AccordionProps } from '@/types';

const Accordion = ({
  title,
  subtitle = null,
  subtitleCondition = false,
  renderPanel,
  defaultOpen = false,
  open: controlledOpen,
}: AccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (controlledOpen !== undefined) {
      setOpen(controlledOpen);
    }
  }, [controlledOpen]);

  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-4">
      <button
        className="flex w-full flex-row"
        onClick={togglePanel}
      >
        <h4 className="">{title}</h4>
        {subtitleCondition ? (
          <span className="">{subtitle}</span>
        ) : (
          ''
        )}
        <ChevronDownSquareIcon
          customStyles={`${open ? 'rotate-180' : ''} text-2xl`}
        />
      </button>
      {open ? (
        <div>
          {renderPanel()}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Accordion;
