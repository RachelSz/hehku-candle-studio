import styled from 'styled-components';
import { Colors, sizes } from '../../../consts';

interface CustomButtonProps {
  variant: string;
  size: string;
  type: string;
  active?: boolean;
}

export const CustomButton = styled.button<CustomButtonProps>`
  background: ${(props) => props.variant};
  color: ${(props) =>
    props.variant === Colors.white
      ? Colors.darkGreyText
      : props.variant === 'transparent'
        ? Colors.tertiary
        : Colors.lightText};
  font-weight: 700;
  border: 1px solid ${(props) => props.variant};
  border-radius: 4px;
  padding: ${(props) =>
    props.variant !== 'transparent'
      ? props.size === sizes.s
        ? '6.5px 25px'
        : props.size === sizes.m
          ? '10px 24px'
          : '12px 28px'
      : props.size === sizes.s
        ? '6.5px 3px'
        : props.size === sizes.m
          ? '15px 3px'
          : '20px 3px'};

  text-align: center;

  font-size: ${(props) =>
    props.size === sizes.s ? '12px' : props.size === sizes.m ? '18px' : '24px'};
  line-height: 20px;

  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    background-color: ${(props) =>
      props.variant === Colors.white ? '#f2f2f2' : ''};

    border: ${(props) =>
      props.variant === Colors.white ? '1px solid #f2f2f2' : ''};
    border-bottom: ${(props) =>
      props.variant === 'transparent' ? `1px solid ${Colors.tertiary}` : ''};
    border-radius: ${(props) => (props.variant === 'transparent' ? 0 : '4px')};
  }

  span {
    transform: scale(0.1, 1);
  }

  &:hover span {
    transition: all 0.3s;
    color: ${(props) =>
      props.variant === Colors.white
        ? Colors.darkGreyText
        : props.variant === 'transparent'
          ? Colors.tertiary
          : props.variant};
  }

  &:active {
    /* transition: all 0.1s; */
    background-color: ${(props) =>
      props.variant === Colors.white ? props.variant : ''};
    border: ${(props) => `2px solid ${props.variant}`};
  }

  // Disabled state

  &:disabled {
    background-color: ${Colors.disabled};
    color: ${Colors.disabledText};
    border: 1px solid ${Colors.disabled};
    cursor: default;
  }

  &:hover&:disabled span {
    color: ${Colors.disabledText};
  }

  &:disabled&:hover {
    cursor: default;
    background-color: ${Colors.disabled};
    color: ${Colors.disabledText};
    border: 1px solid ${Colors.disabled};
  }
`;
