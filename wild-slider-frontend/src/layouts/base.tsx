import Head from 'next/head';

type BaseProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseProps): JSX.Element => {
  return (
    <div id="main">
      <Head>
        <title>Wild - Slider Component made with Next.js | GraphQL | GSAP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  );
};

export default BaseLayout;
