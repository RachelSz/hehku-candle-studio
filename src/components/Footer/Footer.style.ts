import styled from 'styled-components';
import { Colors } from '../../consts';

export const Wrapper = styled.div`
  background-color: ${Colors.primary};
`;

export const SocialMediaWrapper = styled.div`
  display: flex;

  justify-content: center;
`;

export const LinkWrapper = styled.div`
  a {
    text-decoration: none;
  }

  a:hover {
    color: ${Colors.darkGreyText};
  }
`;
