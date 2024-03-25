import React from 'react';
import { IoCalendarNumberSharp } from 'react-icons/io5';

import type { IconProps } from '@/types';

const CalendarIcon = ({ customStyles, size }: IconProps) => {
  return <IoCalendarNumberSharp className={customStyles} size={size} />;
};

export default CalendarIcon;
