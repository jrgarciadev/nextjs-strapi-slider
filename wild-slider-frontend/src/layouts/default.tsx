import BaseLayout from './base';
import Main from './main';

type DefaultProps = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: DefaultProps): JSX.Element => {
  return (
    <BaseLayout>
      <>
        <Main>{children}</Main>
      </>
    </BaseLayout>
  );
};

export default DefaultLayout;
