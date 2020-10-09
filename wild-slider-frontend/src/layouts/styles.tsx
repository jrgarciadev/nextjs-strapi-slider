import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg.default};
  min-height: 100vh;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  border-top-width: 1px;
  border-top-style: solid;
  justify-content: stretch;
  align-content: stretch;
  flex: none;
  position: relative;
  padding: 32px;
`;
