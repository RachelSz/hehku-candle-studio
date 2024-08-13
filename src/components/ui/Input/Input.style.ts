import styled from 'styled-components';
import { Colors, sizes } from '../../../consts';

interface InputWrapperProps {
  size: string;
  variant: string;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  label {
    font-weight: 600;
    font-size: 18px;
    color: ${Colors.darkText};
    display: block;
    margin-bottom: 8px;
  }
  input {
    background-color: ${(props) => props.variant ?? props.variant};

    color: ${(props) =>
      props.variant === Colors.tertiary || props.variant === Colors.dark
        ? Colors.lightText
        : Colors.darkGreyText};
    font-size: 16px;
    font-weight: 400;
    width: ${(props) =>
      props.size === sizes.s
        ? '50px'
        : props.size === sizes.m
          ? '200px'
          : props.size === sizes.l
            ? '350px'
            : '200px'};
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
  }

  input::placeholder {
    color: ${(props) =>
      props.variant === Colors.tertiary || props.variant === Colors.dark
        ? '#cbc2c2'
        : Colors.darkGreyText};
  }

  input:focus-visible {
    outline: none;
  }
`;
