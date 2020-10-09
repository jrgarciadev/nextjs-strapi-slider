/* eslint-disable no-return-assign */
import { useEffect, useRef } from 'react';
import { Entry } from '@graphql/entries';
import Emitter from '@lib/emitter';
import { SliderContainer, Slider } from './styles';
import SliderItem from './item';
import SliderButtons, { ButtonEvent } from './buttons';
import SliderDots, { SliderDotsEvent } from './dots';

export type SliderProps = {
  entries: Array<Entry>;
};

const DURATION = 0.3; // in seconds

const SliderComponent = ({ entries = [] }: SliderProps): JSX.Element => {
  let activeSlide = 0;
  const slidesRefs = useRef([]);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  let offsets = [];
  let gsapLib = null;
  let dragger = null;
  let lastEndValue = 0;

  useEffect(() => {
    window.addEventListener('resize', updateSnaps);
    return () => window.removeEventListener('resize', updateSnaps);
  }, []);

  useEffect(() => {
    slidesRefs.current = slidesRefs.current.slice(0, entries.length);
  }, [entries]);

  useEffect(() => {
    const { gsap } = require('gsap');
    const { Draggable } = require('gsap/Draggable');
    gsapLib = gsap;
    gsapLib.registerPlugin(Draggable);
    dragger = Draggable.create(sliderRef.current, {
      type: 'x',
      edgeResistance: 1,
      snap: offsets,
      inertia: true,
      bounds: containerRef.current,
      onDragEnd: handleDragEnd,
      allowNativeTouchScrolling: false,
      zIndexBoost: false,
    });
    updateSnaps();
  }, []);

  const updateDotIndex = (index, event: SliderDotsEvent) => {
    Emitter.emit(event, index);
  };

  const handleDragEnd = () => {
    if (!dragger) return;
    const endValue = dragger[0].endX;
    // tolerance of 56 is used so that the box has to thrown at least 50% towards the next snappoint
    if (endValue < lastEndValue && activeSlide < offsets.length - 1) {
      activeSlide += 1;
      updateDotIndex(activeSlide, SliderDotsEvent.AddIndex);
    } else if (endValue > lastEndValue && activeSlide > 0) {
      activeSlide -= 1;
      updateDotIndex(activeSlide, SliderDotsEvent.RemoveIndex);
    }
    lastEndValue = endValue;
    animateContainer();
  };

  const handleButtonClick = (event: ButtonEvent) => {
    if (event === ButtonEvent.Left && activeSlide > 0) {
      activeSlide -= 1;
      updateDotIndex(activeSlide, SliderDotsEvent.RemoveIndex);
    } else if (event === ButtonEvent.Right && activeSlide < entries.length - 1) {
      activeSlide += 1;
      updateDotIndex(activeSlide, SliderDotsEvent.AddIndex);
    }
    animateContainer();
  };

  const updateSnaps = () => {
    offsets = [];
    if (!slidesRefs.current) return;
    const slides = slidesRefs.current;
    const { innerWidth } = window;
    gsapLib.set(sliderRef.current, { width: slides.length * innerWidth });
    gsapLib.set(slides, { width: innerWidth });
    slides.forEach((slide) => {
      offsets.push(slide.offsetLeft !== 0 ? -slide.offsetLeft : 0);
    });
    gsapLib.set(sliderRef.current, { x: offsets[activeSlide] });
    dragger[0].vars.snap = offsets;
  };

  const animateDot = () => console.warn('animateDot');

  const animateContainer = () => {
    if (!gsapLib) return;
    gsapLib.to(sliderRef.current, DURATION, { x: offsets[activeSlide], onUpdate: animateDot });
  };

  const assingEl = (el: any, index: number): void => (slidesRefs.current[index] = el);

  return (
    <SliderContainer ref={containerRef}>
      <Slider ref={sliderRef}>
        {entries &&
          entries.map((entry, i) => (
            <SliderItem
              ref={(el) => assingEl(el, i)}
              key={entry.id}
              imgName={entry.coverImage.name}
              imgUrl={entry.coverImage.url}
            />
          ))}
      </Slider>
      <SliderDots count={entries.length} initialActiveIndex={0} />
      <SliderButtons onNext={handleButtonClick} onPrev={handleButtonClick} />
    </SliderContainer>
  );
};

export default SliderComponent;
