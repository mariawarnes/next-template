import { CustomButtonProps } from '../types';

const CustomButton = ({
  text,
  Icon,
  label,
  customStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`${customStyles}`}
      title={text !== '' ? null : label}
      aria-label={label}
      onClick={handleClick}
    >
      {Icon && <Icon height="25" width="25" />}
      {text}
    </button>
  );
};

export default CustomButton;
