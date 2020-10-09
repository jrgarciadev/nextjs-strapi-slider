import { MainContainer } from './styles';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps): JSX.Element => (
  <MainContainer id="main-container">{children}</MainContainer>
);

export default Main;
