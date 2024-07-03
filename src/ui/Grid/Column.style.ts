import styled from 'styled-components';

interface Props {
  sizes: {
    mobile: number | { span: number; offset: number };
    tablet: number | { span: number; offset: number };
    desktop: number | { span: number; offset: number };
  };
}
const getGridColumn = (
  size:
    | number
    | {
        span: number;
        offset: number;
      },
) => {
  if (typeof size === 'number') {
    return `span ${size}`;
  }
  if (typeof size === 'object') {
    const { span, offset } = size;
    const spanValue = span ? `span ${span}` : 'span 12';
    const offsetValue = offset ? `${offset + 1} /` : '';

    console.log({ offsetValue, spanValue });
    return `${offsetValue} ${spanValue}`;
  }
  return 'span 12';
};

export const Column = styled.div<Props>`
  grid-column: ${({ sizes }) => getGridColumn(sizes.mobile)};

  @media (min-width: 768px) {
    grid-column: ${({ sizes }) => getGridColumn(sizes.tablet)};
  }

  @media (min-width: 1024px) {
    grid-column: ${({ sizes }) => getGridColumn(sizes.desktop)};
  }
`;
