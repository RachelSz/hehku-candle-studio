import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, breakpoints } from '../../consts';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  border-radius: 3px;

  position: sticky;
  top: 0;
  background-color: ${Colors.secondary};
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  padding: 10px;
  z-index: 999;
  @media (${breakpoints.m.max}) {
    justify-content: space-between;
  }
`;
export const Navigation = styled.nav`
  margin-left: 100px;
`;
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  margin: 0 5px;

  &:hover {
    border-bottom: 0.5px solid;
    padding-bottom: 10px;
    box-shadow: rgba(54, 54, 56, 1) 0px 1px 0px;
  }

  &.active {
    border-bottom: 0.5px solid;
    padding-bottom: 10px;
    color: #65615b;
    box-shadow: rgba(54, 54, 56, 1) 0px 1px 0px;
  }
`;
