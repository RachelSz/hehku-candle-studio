import styled from 'styled-components';
import { Colors } from '../../../consts';

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;

  height: 500px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
`;

export const HeroTitleWrapper = styled.div`
  span {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${Colors.white};
  }

  h1 {
    font-weight: 500;
    text-transform: uppercase;
    color: ${Colors.white};
  }
`;

export const HeroText = styled.p`
  color: ${Colors.white};
  padding-bottom: 15px;
`;
