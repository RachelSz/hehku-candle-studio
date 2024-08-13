import { ReactNode } from 'react';
import { CustomButton } from './Button.style';
import { sizes, btnVariants as variants } from '../../../consts';
import { BtnVariants, Sizes } from '../../../types';

const buttonTypes = { submit: 'submit', button: 'button', reset: 'reset' };

interface ButtonType {
  submit: string;
  button: string;
  reset: string;
}
interface Props {
  variant: (variants: BtnVariants) => string;
  size: (sizes: Sizes) => string;
  children: string | JSX.Element | JSX.Element[] | ReactNode;
  type: (buttonTypes: ButtonType) => string;
  onClick?: () => void;
  disabled?: boolean;

  active?: boolean;
}
export default function Button({
  variant,
  size,
  children,
  type,
  onClick,
  disabled,
  active,
}: Props) {
  // ADD  ICON LEFT OR ICON RIGHT
  return (
    <div>
      <CustomButton
        variant={variant(variants)}
        size={size(sizes)}
        type={type(buttonTypes)}
        onClick={onClick}
        disabled={disabled}
        active={active}
      >
        <span>{children}</span>
      </CustomButton>
    </div>
  );
}
