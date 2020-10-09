import ArrowIcon from '@components/Icons/Arrow';
import { ButtonsContainer, SliderButton } from './styles';

export enum ButtonEvent {
  Left,
  Right,
}

type SliderButtonProps = {
  onPrev?: (event: ButtonEvent) => void;
  onNext?: (event: ButtonEvent) => void;
};

const SliderButtons = ({ onPrev, onNext }: SliderButtonProps): JSX.Element => (
  <ButtonsContainer>
    <SliderButton onClick={() => onPrev(ButtonEvent.Left)}>
      <ArrowIcon width={15} height={6} />
    </SliderButton>
    <SliderButton onClick={() => onNext(ButtonEvent.Right)}>
      <ArrowIcon width={15} height={6} />
    </SliderButton>
  </ButtonsContainer>
);

export default SliderButtons;
