import { Link } from 'react-router-dom';
import { LogoContainer } from './Logo.style';
import { Sizes } from '../../../types';
import { sizes } from '../../../consts';
import { pages } from '../../../routes';

const variants = {
  light: '/assets/big-light-logo.png',
  dark: '/assets/big-dark-logo.png',
};

interface Variants {
  light: string;
  dark: string;
}

interface Props {
  variant: (variants: Variants) => string;
  size: (sizes: Sizes) => string;
}

export default function Logo({ variant, size }: Props) {
  return (
    <LogoContainer>
      <Link to={pages.homepage}>
        <img
          src={variant(variants)}
          width={size(sizes) === 's' ? 50 : size(sizes) === 'm' ? 100 : 150}
          alt="bg-logo"
        />
      </Link>
    </LogoContainer>
  );
}
