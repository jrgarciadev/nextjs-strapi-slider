import { useState, useEffect } from 'react';
import Emitter from '@lib/emitter';
import { DotsContainer, DotsList, DotItem } from './styles';

type DotsProps = {
  count: number;
  initialActiveIndex: number;
};

export enum SliderDotsEvent {
  AddIndex = 'ADD_INDEX',
  RemoveIndex = 'REMOVE_INDEX',
}

const SliderDots = ({ count, initialActiveIndex }: DotsProps): JSX.Element => {
  const items = [];
  const [activeItems, setActiveItems] = useState([initialActiveIndex]);

  for (let i = 0; i < count; i += 1) {
    items.push(i);
  }

  const handleAddIndex = (index) => {
    setActiveItems((prev) => [...prev, index]);
  };

  const handleRemoveIndex = (index) => {
    setActiveItems((prev) => {
      const prevTmp = [...prev];
      if (prevTmp.indexOf(index) > -1) {
        prevTmp.pop();
      }
      return prevTmp;
    });
  };

  useEffect(() => {
    Emitter.on(SliderDotsEvent.AddIndex, handleAddIndex);
    Emitter.on(SliderDotsEvent.RemoveIndex, handleRemoveIndex);
    return () => {
      Emitter.off(SliderDotsEvent.AddIndex);
      Emitter.off(SliderDotsEvent.RemoveIndex);
    };
  }, []);

  return (
    <DotsContainer>
      <DotsList>
        {items.map((i) => (
          <DotItem
            key={i}
            active={activeItems.indexOf(i) !== -1}
            lastActive={activeItems.length - 1 === i}
          />
        ))}
      </DotsList>
    </DotsContainer>
  );
};
export default SliderDots;
