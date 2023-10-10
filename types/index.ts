import {
  MouseEventHandler,
} from 'react';

export interface CustomButtonProps {
  text?: string;
  Icon?: React.ElementType;
  label: string;
  customStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}