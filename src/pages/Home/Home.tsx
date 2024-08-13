import { Link } from 'react-router-dom';
import { Button, HeroSlider } from '../../components/ui';
import { Column } from '../../ui/Grid/Column.style';
import { Container } from '../../ui/Grid/Container.style';
import { Row } from '../../ui/Grid/Row.style';
import { pages } from '../../routes';
import {
  HeroText,
  HeroTitleWrapper,
} from '../../components/ui/HeroSlider/HeroSlider.style';

export default function Home() {
  const slides = [
    {
      src: '/assets/mock-hero.avif',
      alt: 'hehkucandlestudio',

      children: (
        <>
          <HeroTitleWrapper>
            <span>Welcome to</span>
            <h1>
              Hehku <br /> Candle studio
            </h1>
          </HeroTitleWrapper>
          <HeroText>
            Discover unique, hand crafted <br />
            soy wax candles
          </HeroText>

          <div>
            <Link to={pages.products}>
              <Button
                variant={(v) => v.primary}
                size={(s) => s.m}
                type={(t) => t.button}
              >
                Shop now
              </Button>
            </Link>
          </div>
        </>
      ),
    },

    {
      src: '/assets/mock-hero-2.avif',
      alt: 'hehkucandlestudio',

      children: (
        <>
          <HeroTitleWrapper></HeroTitleWrapper>
          <HeroText>Discover our new collection of concrete candles.</HeroText>

          <div>
            <Link to={pages.products}>
              <Button
                variant={(v) => v.primary}
                size={(s) => s.m}
                type={(t) => t.button}
              >
                Shop now
              </Button>
            </Link>
          </div>
        </>
      ),
    },

    {
      src: '/assets/mock-hero-3.avif',
      alt: 'hehkucandlestudio',

      children: (
        <>
          <HeroTitleWrapper>
            <h2>In search of a gift?</h2>
          </HeroTitleWrapper>
          <HeroText>Check out our collection.</HeroText>

          <div>
            <Link to={pages.products}>
              <Button
                variant={(v) => v.primary}
                size={(s) => s.m}
                type={(t) => t.button}
              >
                Shop now
              </Button>
            </Link>
          </div>
        </>
      ),
    },
  ];
  return (
    <Container>
      <Row>
        <Column sizes={{ mobile: 12, tablet: 12, desktop: 12 }}>
          <HeroSlider slides={slides}></HeroSlider>
        </Column>
      </Row>

      <Row>Productslist </Row>
    </Container>
  );
}
