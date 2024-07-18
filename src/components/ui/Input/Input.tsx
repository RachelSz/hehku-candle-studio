import { ChangeEvent } from 'react';
import { sizes, inputVariants as variants } from '../../../consts';
import { Sizes, InputVariants } from '../../../types';
import { InputWrapper } from './Input.style';

interface Props {
  id: string;
  type: string;
  value: string | number;
  variant?: (variants: InputVariants) => string;
  size?: (sizes: Sizes) => string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

export default function Input({
  id,
  type,
  value,
  variant,
  size,
  onChange,
  placeholder,
  label,
  disabled,
}: Props) {
  return (
    <InputWrapper
      variant={variant ? variant(variants) : 'white'}
      size={size ? size(sizes) : 's'}
    >
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputWrapper>
  );
}
