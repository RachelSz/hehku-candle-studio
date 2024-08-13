import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../consts';

export const NavbarMobileWrapper = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MobileNavigationWrapper = styled.div``;

export const MobileNavigationList = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${Colors.primaryText};
  width: 100%;
  padding: 20px 0;
  &:hover {
    border-radius: 2px;
    background-color: ${Colors.primary};
    color: ${Colors.secondaryText};
  }
`;
