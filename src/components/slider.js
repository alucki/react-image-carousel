import React, { useState } from "react";
import { SliderContainer } from "./slider.styles.js";
import { SliderContent } from "./sliderContent.styles";
import { Slide } from "./slide";
import { LeftArrow, RightArrow } from "./arrow";

const Slider = ({ slides }) => {
  // change this to use ref?
  // const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * 320,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * 320,
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * 320,
    });
  };

  return (
    <SliderContainer>
      <LeftArrow handleClick={prevSlide} />
      <RightArrow handleClick={nextSlide} />
      <SliderContent
        translate={translate}
        transition={transition}
        width={320 * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;
