import { initializeApollo } from '@lib/apollo';
import { ALL_ENTRIES_QUERY } from '@graphql/entries';
import Slider, { SliderProps } from '@components/Slider';

const HomePage = (props: SliderProps): JSX.Element => {
  return <Slider {...props} />;
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ALL_ENTRIES_QUERY,
  });

  return {
    props: {
      entries: data.entries ?? [],
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default HomePage;
