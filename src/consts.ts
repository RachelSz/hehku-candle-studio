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
  dark: '#222222',
  white: '#ffffff',
  primary: '#eeddca',
  secondary: '#d5c0a0',
  tertiary: '#698474',
  hover: {
    tertiary: 'red',
    white: 'grey',
  },

  // text
  darkText: ' #000000',
  lightText: '#f5f5f5',
  darkGreyText: '#393536',

  primaryText: '#938d84',
  secondaryText: '#65615b',

  danger: '#FE5F55',
  successful: '#139675',

  disabled: '#dfdfdf',
  disabledText: '#a5a5a5',
};

export const sizes = { s: 's', m: 'm', l: 'l' };

export const variants = {
  white: Colors.white,
  dark: Colors.dark,
  primary: Colors.primary,
  secondary: Colors.secondary,
};

export const inputVariants = {
  white: Colors.white,
  dark: Colors.dark,
  primary: Colors.primary,
  secondary: Colors.secondary,
  tertiary: Colors.tertiary,
};

export const btnVariants = {
  primary: Colors.tertiary,
  secondary: Colors.white,
  tertiary: 'transparent',
  danger: Colors.danger,
  successful: Colors.successful,
};
