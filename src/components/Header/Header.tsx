import { devices } from '../../consts';
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { routes } from '../../routes';

import NavbarMobile from '../NavbarMobile/NavbarMobile';
import { Logo } from '../ui';
import {
  CustomNavLink,
  HeaderWrapper,
  Navigation,
  NavigationList,
} from './Header.style';

export default function Header() {
  const isMobile = useMediaQuery(devices.mobile);
  const isTablet = useMediaQuery(devices.tablet);
  const isDesktop = useMediaQuery(devices.desktop);

  return (
    <HeaderWrapper>
      {isMobile || isTablet ? (
        <>
          <Logo variant={(v) => v.dark} size={(s) => s.s} />
          <NavbarMobile />
        </>
      ) : null}

      {isDesktop ? (
        <>
          <Logo variant={(v) => v.dark} size={(s) => s.m} />
          <Navigation>
            <NavigationList>
              {routes.map((route) => (
                <CustomNavLink to={route.link} key={route.link}>
                  {route.name}
                </CustomNavLink>
              ))}
            </NavigationList>
          </Navigation>
        </>
      ) : null}
    </HeaderWrapper>
  );
}
