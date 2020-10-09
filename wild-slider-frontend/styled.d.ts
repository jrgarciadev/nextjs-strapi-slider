import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: string;
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      semibold: number;
      bold: number;
    };
    bg: {
      default: string;
      reverse: string;
    };
    text: {
      default: string;
      reverse: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
