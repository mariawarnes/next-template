import type { MouseEventHandler } from 'react';
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
