import React, { useState, useRef, useEffect } from "react";
import { SliderContainer } from "./slider.styles.js";
import { SliderContent } from "./sliderContent.styles";
import { Slide } from "../slide/slide";
import { LeftArrow, RightArrow } from "../arrow/arrow";

const Slider = ({ slides }) => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const slideWidthRef = useRef();
  const transitionRef = useRef();

  const [slideWidth, setSlideWidth] = useState();

  // translate value needs to be slideWidth on initialization, ie 300
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 300,
    transition: 0,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, activeSlide, _slides } = state;

  useEffect(() => {
    setSlideWidth(slideWidthRef.current.clientWidth);
  }, []);

  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const smooth = () => {
      transitionRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [state, transition]);

  const smoothTransition = () => {
    let _slides = [];

    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: slideWidth,
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + slideWidth,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  return (
    <SliderContainer>
      <LeftArrow handleClick={prevSlide} />
      <RightArrow handleClick={nextSlide} />
      <SliderContent
        translate={translate}
        transition={transition}
        width={slideWidth && slideWidth * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide ref={slideWidthRef} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;
