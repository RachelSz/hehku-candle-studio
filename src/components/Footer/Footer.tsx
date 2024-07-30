import { ChangeEvent, useState } from 'react';

import { Link } from 'react-router-dom';
import { routes as mainRoutes } from '../../routes';
import { Column } from '../../ui/Grid/Column.style';
import { Container } from '../../ui/Grid/Container.style';
import { Row } from '../../ui/Grid/Row.style';
import { FacebookIcon, InstagramIcon, PinterestIcon } from '../ui/SocialMedia';
import {
  LinkWrapper,
  SocialMediaWrapper,
  SubscriptionWrapper,
  Wrapper,
} from './Footer.style';
import { Button, Input } from '../ui';

export default function Footer() {
  const [inputValue, setValue] = useState('');
  const policiesItems = [
    { name: 'Privacy Policy', link: '/privacyPolicy' },
    { name: 'Terms of Service', link: '/termsOfService' },
    { name: 'Refund Policy', link: '/refundPolicy' },
    { name: 'Shipping Policy', link: '/shippingPolicy' },
  ];

  const [isEmailValid, setValidEmail] = useState(false);

  console.log({ inputValue });

  const handleSubscriptionValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(inputValue)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleSubscription = () => {
    console.log('submitted', inputValue);
    setValidEmail(false);

    setValue('');
  };
  return (
    <Wrapper>
      <Row>
        <Column
          sizes={{ mobile: 12, tablet: 12, desktop: { span: 3, offset: 1 } }}
        >
          <SubscriptionWrapper>
            <h3>Subscribe now</h3>
            <form
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Input
                required
                type="email"
                id="subscription-input"
                variant={(v) => v.white}
                placeholder="Type your email address"
                size={(s) => s.m}
                value={inputValue}
                onChange={(e) => handleSubscriptionValue(e)}
              />
              <div style={{ paddingLeft: '15px' }}>
                <Button
                  variant={(v) => v.primary}
                  size={(s) => s.s}
                  onClick={handleSubscription}
                  type={(t) => t.submit}
                  disabled={inputValue === '' || isEmailValid !== true}
                >
                  Submit
                </Button>
              </div>
            </form>
          </SubscriptionWrapper>
        </Column>
        <Column sizes={{ mobile: 12, tablet: 6, desktop: 4 }}>
          <h3>Legal</h3>
          {policiesItems.map((item) => (
            <LinkWrapper key={item.name}>
              <Link to={item.link}>
                <p>{item.name}</p>
              </Link>
            </LinkWrapper>
          ))}
        </Column>
        <Column sizes={{ mobile: 12, tablet: 6, desktop: 4 }}>
          <h3>Information</h3>
          {mainRoutes.map((item) => (
            <LinkWrapper key={item.name}>
              <Link to={item.link}>
                <p>{item.name}</p>
              </Link>
            </LinkWrapper>
          ))}
        </Column>
      </Row>
      <Container>
        <Row>
          <Column sizes={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div>
              <h4>Follow us on</h4>
            </div>
            <div>
              <SocialMediaWrapper>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100px',
                  }}
                >
                  <FacebookIcon />
                  <InstagramIcon />
                  <PinterestIcon />
                </div>
              </SocialMediaWrapper>
            </div>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
}
