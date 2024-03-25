import type { PortableTextBlock } from '@portabletext/react';

import type { ImageProps } from 'next/image';
import type {
  ChangeEventHandler,
  Dispatch,
  ElementType,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from 'react';

import type { MenuItemProps } from '@/utils';

export interface ButtonProps {
  text?: string;
  Icon?: ElementType;
  iconPosition?: string;
  label: string;
  name?: string;
  disabled?: boolean;
  customStyles?: string;
  btnType?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  showCaret?: boolean;
  styleType?: 'primary' | 'secondary' | 'primary-small' | 'secondary-small';
}
export interface LinkButtonProps {
  text?: string;
  Icon?: ElementType;
  iconPosition?: string;
  label: string;
  disabled?: boolean;
  customStyles?: string;
  href: string;
  styleType?: 'primary' | 'secondary' | 'primary-small' | 'secondary-small';
}

export interface Link {
  title: string;
  url: string;
}

export interface TopLevelLinkProps {
  menu: {
    title: string;
    links?: {
      title: string;
      url: string;
    }[];
    link?: string;
  };
}

export interface SubMenuProps {
  menu: MenuItemProps;
  isOpen: boolean;
  onSubMenuOpen: () => void;
}

export interface MessagesButtonProps {
  quantity: number;
  customStyles?: string;
}

export interface AccountButtonProps {
  customStyles?: string;
}

export interface MainFieldProps {
  label: string;
  id: string;
  small: boolean;
  type: string;
  placeholder?: Date;
  options?: {
    label: string;
    value: string | number;
  }[];
}

export interface SubSearchFieldProps {
  label: string;
  id: string;
  small: boolean;
  type: string;
  options?: {
    label: string;
    value: string | number;
  }[];
}

export interface LightDarkImageProps extends ImageProps {
  lightImage: string;
  darkImage: string;
}

export interface SearchContextType {
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  showSearch: boolean;
}

export interface MobileSearchButtonProps {
  customStyles?: string;
}

export interface InputProps {
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  handleSelect?: MouseEventHandler<HTMLInputElement>;
  type: 'search' | 'text' | 'password' | 'email';
  id: string;
  name?: string;
  label: string;
  required?: boolean;
  bgColor?: string;
  darkBgColor?: string;
  customStyles?: string;
  showCaps?: boolean;
  clearable?: boolean;
  validation?: RegExp;
  labelPosition?: 'inside' | 'outside';
  value?: string;
  labelSuffix?: false | 'show required' | 'show optional';
  requiredErrorCopy?: string;
  invalidErrorCopy?: string;
  dataTest?: string;
}

export interface AddressInputProps {
  autofill?: boolean;
  autocomplete?: boolean;
}

export interface TextAreaProps {
  handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
  id: string;
  name?: string;
  label: string;
  required?: boolean;
  bgColor?: string;
  darkBgColor?: string;
  customStyles?: string;
  clearable?: boolean;
  validation?: RegExp;
}

export interface BigButtonProps {
  text?: string;
  Icon?: ElementType;
  iconPosition?: string;
  label: string;
  disabled?: boolean;
  customStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface PasswordToggleProps {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

export interface CapsLockIndicatorProps {
  isCapsLockOn: boolean;
}

export interface isValidIndicatorProps {
  isValid: boolean;
}


export interface AutocompleteProps {
  placeholder: string;
  customStyles?: string;
  data: string[];
}

export interface AutocompleteWithButtonProps extends AutocompleteProps {
  btnText: string;
  btnLabel: string;
  btnDisabled?: boolean;
  btnCustomStyles?: string;
  btnType?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ChipProps {
  text: string;
  label: string;
  disabled?: boolean;
  customStyles?: string;
}

export interface AccordionProps {
  title: ReactNode;
  subtitle?: ReactNode;
  subtitleCondition?: boolean;
  renderPanel: () => ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
}

export interface ShowMoreProps {
  openText: string;
  closeText: string;
  renderPanel: () => ReactNode;
}

export interface InputButtonProps {
  text: string;
  handleClick: () => void;
  customStyles: string;
  clearable?: boolean;
}
export interface CheckboxProps {
  title: string;
  name: string;
  checked: boolean;
  handleChange: () => void;
  labelPosition?: 'before' | 'after';
  customStyles?: string;
  greenOnCheck?: boolean;
}

export interface CheckboxButtonProps {
  title: ReactNode;
  name: string;
  checked: boolean;
  handleChange: () => void;
  customStyles?: string;
}

export interface DesktopSearchBarProps {
  showTabTitle: boolean;
}


export type FetchDataParams<T> = {
  query: string;
  setDataFunction: (data: T) => void;
  shouldFetch?: boolean;
};

export interface HeaderAccountProps {
  loggedOutStyles: string;
  loggedInStyles: string;
}


export interface IconProps {
  width?: number;
  height?: number;
  size?: number;
  customStyles?: string;
  ariaLabel?: string;
  title?: string;
}

export interface RadioGroupProps {
  options: {
    value: string;
    title: string;
  }[];
  name: string;
  title?: string;
}

export interface PulloutBoxProps {
  Icon: ElementType;
  title?: string;
  copy: string;
  borderColor: string;
  textColor: string;
  customStyles?: string;
}

export interface PulloutContentProps {
  title?: string;
  copy: string;
  customStyles?: string;
}

export interface CustomLinkProps {
  href: string;
  label: string;
  arrow?: boolean;
  customStyles?: string;
}
