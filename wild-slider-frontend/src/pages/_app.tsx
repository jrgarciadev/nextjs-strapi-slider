import { AppProps } from 'next/app';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import DefaultLayout from '@layouts/default';
import GlobalStyles from '@styles/globals';
import lightTheme from '@themes/light';
import darkTheme from '@themes/dark';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </DefaultLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
