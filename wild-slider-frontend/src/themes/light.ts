import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '0rem',
  fontFamily: 'Open Sans',
  fontSize: {
    xxs: '0.9rem',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
    xxl: '2.6rem',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  bg: {
    default: '#FFFFFF',
    reverse: '#181818',
  },
  text: {
    default: '#181818',
    reverse: '#FFFFFF',
  },
  shadows: {
    small: '0 5px 10px rgba(0, 0, 0, 0.12)',
    medium: '0 8px 30px rgba(0,0,0, 0.12)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
  },
};

export default lightTheme;
