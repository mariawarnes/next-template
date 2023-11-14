import type { ButtonProps } from '../../types/index';

const Button = ({
  text,
  Icon,
  iconPosition,
  label,
  disabled,
  customStyles,
  btnType,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`${customStyles} min-h-[44px] min-w-[44px] px-3 py-2 text-center lg:min-h-[24px] lg:min-w-[24px] ${
        disabled && `cursor-not-allowed opacity-50`
      }`}
      disabled={disabled}
      title={text !== '' ? '' : label}
      aria-label={label}
      onClick={handleClick}
      type={btnType}
    >
      {iconPosition !== 'right' && Icon && (
        <Icon height="24" width="24" className={text ? 'mr-2' : ''} />
      )}
      {text}
      {iconPosition == 'right' && Icon && (
        <Icon height="24" width="24" className={text ? 'ml-2' : ''} />
      )}
    </button>
  );
};

export default Button;
