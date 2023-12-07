
import type { MouseEventHandler, ChangeEventHandler, ReactNode } from 'react';
import type { ImageProps } from 'next/image';

export interface ButtonProps {
  text?: string;
  Icon?: React.ElementType;
  iconPosition?: string;
  label: string;
  disabled?: boolean;
  customStyles?: string;
  btnType?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface Link {
  title: string;
  url: string;
}
export interface TopLevelLinkProps {
  menu: {
    title: string;
    link: string;
  };
}
export interface SubMenuProps {
  menu: {
    title: string;
    links: Link[];
  };
}
export interface LightDarkImageProps extends ImageProps {
  lightImage: string;
  darkImage: string;
}

export interface InputProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  type: 'text' | 'password';
  id: string;
  label: string;
  value: string;
  required: boolean;
  placeholderStyles: string;
  inputStyles: string;
}