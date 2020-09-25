import React, { useState, useRef, useEffect } from "react";
import { SliderContainer } from "./slider.styles.js";
import { SliderContent } from "./sliderContent.styles";
import { Slide } from "./slide";
import { LeftArrow, RightArrow } from "./arrow";

const Slider = ({ slides }) => {
  const slideWidthRef = useRef();

  const [slideWidth, setSlideWidth] = useState();

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  useEffect(() => {
    setSlideWidth(slideWidthRef.current.clientWidth);
  }, []);

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
      translate: (activeIndex + 1) * slideWidth,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * slideWidth,
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * slideWidth,
    });
  };

  return (
    <SliderContainer>
      <LeftArrow handleClick={prevSlide} />
      <RightArrow handleClick={nextSlide} />
      <SliderContent
        translate={translate}
        transition={transition}
        width={slideWidth && slideWidth * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide ref={slideWidthRef} key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;
