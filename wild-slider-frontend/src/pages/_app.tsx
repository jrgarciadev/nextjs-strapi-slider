import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import DefaultLayout from '@layouts/default';
import GlobalStyles from '@styles/globals';
import theme from '@themes/light';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
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
