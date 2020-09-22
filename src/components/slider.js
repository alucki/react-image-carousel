import React, { useState } from "react";
import { SliderContainer } from "./slider.styles.js";
import { SliderContent } from "./sliderContent.styles";
import { Slide } from "./slide";

const Slider = ({ slides }) => {
  // change this to use ref?
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <SliderContainer>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;
