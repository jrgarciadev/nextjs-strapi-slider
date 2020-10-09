import { forwardRef } from 'react';
import { Slide, SlideImage } from './styles';

type SliderItemProps = {
  imgName?: string;
  imgUrl: string;
};

const SliderItem = forwardRef(
  ({ imgName = '', imgUrl }: SliderItemProps, ref: any): JSX.Element => {
    return (
      <Slide ref={ref}>
        <SlideImage alt={imgName} src={imgUrl} />
      </Slide>
    );
  },
);

export default SliderItem;
