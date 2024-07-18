import styled from 'styled-components';
import { keyframes } from 'styled-components';

interface ModalWrapperProps {
  variant: string;
  size: string;
  position?: string;
}
// make the background fade in
const fadeBg = keyframes`  
  0% {
   background: rgba(0,0,0,0)
  }
  100% {
   background: rgba(0,0,0,0.6)
  }`;

// make the modal fade up and reveal

const slideAppear = keyframes`
 0% {
   opacity: 0;
   transform: translate(0, 35px);
  }
  100% {
   opacity: 1;
   transform: translate(0);
  }`;

export const CustomModal = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  animation: ${fadeBg} 0.3s ease;
`;

export const ModalWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 5px var(--grey-8);
  padding: 0;
  border: none;
  background: ${(props) => props.variant ?? props.variant};
  position: ${(props) => (props.position ? 'absolute' : 'static')};
  right: ${(props) => (props.position === 'right' ? 0 : null)};
  left: ${(props) => (props.position === 'left' ? 0 : null)};

  width: ${(props) =>
    props.position
      ? '50%'
      : props.size === 's'
        ? '450px'
        : props.size === 'm'
          ? '75%'
          : '100%'};
  margin: ${(props) =>
    props.position === 'left'
      ? '0 0 0 12.5%'
      : props.position === 'right'
        ? '0 12.5% 0 0 '
        : props.size === 's'
          ? '124px auto 0 auto '
          : '0 auto'};
  height: ${(props) =>
    props.size === 's' ? '50%' : props.size === 'm' ? '80%' : '100%'};

  animation: ${slideAppear} 0.35s ease;
`;

export const ModalHeader = styled.h2``;
export const ModalContent = styled.div`
  padding: 20px;
  overflow: auto;
`;
