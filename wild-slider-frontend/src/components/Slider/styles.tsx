import styled from 'styled-components';
import { hexa } from '@utils/index';

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 590px;
  max-height: 680px;
  position: absolute;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.medium};
`;

export const Slider = styled.div`
  height: 100%;
`;

export const Slide = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  float: left;
`;

export const SlideImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 590px;
  max-height: 680px;
`;
export const SliderButton = styled.button`
  padding: 2rem;
  height: 6rem;
  width: 7rem;
  appearance: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
  &:active {
    background: ${(props) => hexa(props.theme.bg.reverse, 0.08)};
  }
`;

export const ButtonsContainer = styled.div`
  display: inline-flex;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.bg.default};
  > button:first-of-type {
    border-width: 0.2px;
    border-right-color: ${(props) => hexa(props.theme.bg.reverse, 0.08)};
    border-right-style: solid;
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const DotsContainer = styled.div`
  padding: 2rem;
  display: inline-flex;
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
`;

export const DotsList = styled.ul`
  align-self: center;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

interface DotProps {
  readonly active: boolean;
  readonly lastActive: boolean;
}

export const DotItem = styled.li<DotProps>`
  margin-right: 6px;
  &:before {
    content: '';
    height: 5px;
    width: 5px;
    display: inline-block;
    background: ${(props) => props.theme.bg.default};
    border-radius: 6px;
    cursor: pointer;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
    opacity: 0.3;
  }
  ${({ lastActive }) =>
    lastActive &&
    `
    &:before {
      margin-right: 15px;
    }
  `}

  ${({ active, theme }) =>
    active &&
    `
    &:before {
      background: ${theme.bg.default};
      opacity: 1;
    }
  `}
`;
