import { useState } from 'react';
import Hamburger from 'hamburger-react';

import {
  MobileNavLink,
  MobileNavigationList,
  MobileNavigationWrapper,
  NavbarMobileWrapper,
  Wrapper,
} from './NavbarMobile.style';
import { routes } from '../../routes';
import { Logo, Modal } from '../ui';

export default function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavbarMobileWrapper className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <Modal
          id="navbar-mobile-01"
          title={
            <Wrapper>
              <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            </Wrapper>
          }
          onCancel={() => {
            setOpen(false);
            console.log({ isOpen });
          }}
          variant={(v) => v.secondary}
          size={(sizes) => sizes.m}
          position="right"
        >
          <MobileNavigationWrapper>
            <Logo variant={(v) => v.dark} size={(s) => s.m} />

            <MobileNavigationList>
              {routes.map((route) => (
                <MobileNavLink
                  to={route.link}
                  key={route.link}
                  onClick={() => setOpen(false)}
                >
                  {route.name}
                </MobileNavLink>
              ))}
            </MobileNavigationList>
          </MobileNavigationWrapper>
        </Modal>
      )}
    </NavbarMobileWrapper>
  );
}
