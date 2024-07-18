import { ReactNode, SyntheticEvent } from 'react';
import {
  ModalContent,
  ModalHeader,
  ModalWrapper,
  CustomModal,
} from './Modal.style';
import { sizes, variants } from '../../../consts';
import { Sizes, Variants } from '../../../types';

interface Props {
  id: number | string;
  title: string | ReactNode | JSX.Element | JSX.Element[];
  children: string | JSX.Element | JSX.Element[] | ReactNode;
  size: (sizes: Sizes) => string;
  variant: (variants: Variants) => string;
  onCancel: () => void;
  position?: string;
}

export default function Modal({
  id,
  title,
  children,
  onCancel,
  size,
  variant,
  position,
  ...otherProps
}: Props) {
  const handleOutsideClick = (e: SyntheticEvent<HTMLDivElement>) => {
    if (
      typeof onCancel === 'function' &&
      (e.target as Element).className.includes('modal-container')
    ) {
      onCancel();
    }
  };

  return (
    <CustomModal className="modal-container" onClick={handleOutsideClick}>
      <ModalWrapper
        className="modal"
        variant={variant(variants)}
        size={size(sizes)}
        position={position}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalContent {...otherProps}>{children}</ModalContent>
      </ModalWrapper>
    </CustomModal>
  );
}
