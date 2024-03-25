'use client';

import { Combobox, Transition } from '@headlessui/react';
import React, { useState } from 'react';

import { CloseIcon } from '@/components';
import type { AutocompleteProps } from '@/types';

const Autocomplete = ({ placeholder, data }: AutocompleteProps) => {
  const [selectedResult, setSelectedResult] = useState(placeholder);
  const [search, setSearch] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === placeholder) {
      setSelectedResult('');
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setSelectedResult(placeholder);
    }
  };

  const filteredData =
    search === ''
      ? data
      : data.filter(searchResult => {
          return searchResult.toLowerCase().includes(search.toLowerCase());
        });

  return (
    <Combobox value={selectedResult} onChange={setSelectedResult} nullable>
      <div className={`relative flex-1`}>
        <Combobox.Input
          onChange={handleInputChange}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
          className={`custom-input w-full`}
        />
        <button
          type="button"
          className="absolute right-0"
          title={`Clear ${placeholder}`}
          onClick={() => setSelectedResult('')}
        >
          <CloseIcon />
        </button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Combobox.Options className="absolute max-h-60 w-full overflow-auto">
            <Combobox.Option
              key="placeholder"
              value="%"
              disabled={true}
            >
              {placeholder}
            </Combobox.Option>
            {filteredData.map(searchResult => (
              <Combobox.Option
                key={searchResult}
                value={searchResult}
                className="hover:cursor-pointer"
              >
                {searchResult}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Autocomplete;
