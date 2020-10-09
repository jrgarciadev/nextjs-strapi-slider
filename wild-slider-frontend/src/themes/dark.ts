import { DefaultTheme } from 'styled-components';
import commonStyles from './common';

const darkTheme: DefaultTheme = {
  borderRadius: commonStyles.borderRadius,
  fontFamily: commonStyles.fontFamily,
  fontSize: {
    xxs: commonStyles.fontSize.xxs,
    xs: commonStyles.fontSize.xs,
    sm: commonStyles.fontSize.sm,
    md: commonStyles.fontSize.md,
    lg: commonStyles.fontSize.lg,
    xl: commonStyles.fontSize.xl,
    xxl: commonStyles.fontSize.xxl,
  },
  breakpoints: {
    xs: commonStyles.breakpoints.xs,
    sm: commonStyles.breakpoints.sm,
    md: commonStyles.breakpoints.md,
    lg: commonStyles.breakpoints.lg,
    xl: commonStyles.breakpoints.xl,
  },
  fontWeight: {
    light: commonStyles.fontWeight.light,
    regular: commonStyles.fontWeight.regular,
    semibold: commonStyles.fontWeight.semibold,
    bold: commonStyles.fontWeight.bold,
  },
  bg: {
    default: '#181818',
    reverse: '#FFFFFF',
  },
  text: {
    default: '#FFFFFF',
    reverse: '#181818',
  },
  shadows: {
    small: '0 5px 10px rgba(0, 0, 0, 0.12)',
    medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
  },
};

export default darkTheme;
