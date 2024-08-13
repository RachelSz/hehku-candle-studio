import styled from 'styled-components';
import { Colors } from '../../consts';

export const Wrapper = styled.div`
  background-color: ${Colors.primary};
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  border-radius: 6px;
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

export const SubscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
