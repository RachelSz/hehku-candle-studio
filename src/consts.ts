export const breakpoints = {
  xs: {
    min: '(min-width:320px)',
    max: '(max-width: 480px)',
  }, // Mobile devices

  s: {
    min: '(min-width:481px)',
    max: '(max-width: 768px)',
  }, // iPads, Tablets

  m: {
    min: '(min-width:769px)',
    max: '(max-width: 1024px)',
  }, //  Small screens, laptops

  l: {
    min: '(min-width:1025px)',
    max: '(max-width: 1200px)',
  }, //  Desktops, large screens

  xl: '(min-width: 1201px)', //Extra large screens, TV
};

export const devices = {
  mobile: breakpoints.s.max,
  tablet: breakpoints.m.min && breakpoints.m.max,
  desktop: breakpoints.l.min,
};

export const Colors = {
  // background
  light: '#fffcf1',
  dark: '#222222',

  white: '#ffffff',

  primary: '#d7c9b8',
  secondary: '#ebe6de',

  tertionary: '#698474',

  // text
  darkText: ' #000000',
  lightText: '#f5f5f5',
  darkGreyText: '#393536',

  primaryText: '#938d84',
  secondaryText: '#65615b',
};

export const sizes = { s: 's', m: 'm', l: 'l' };

export const variants = {
  white: Colors.white,
  light: Colors.light,
  dark: Colors.dark,
  primary: Colors.primary,
  secondary: Colors.secondary,
};

export const inputVariants = {
  tertionary: Colors.tertionary,

  primary: Colors.primary,
  secondary: Colors.secondary,

  dark: Colors.dark,
  white: Colors.white,
};
