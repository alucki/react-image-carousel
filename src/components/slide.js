import React from "react";
import { SlideContainer } from "./slide.styles";

export const Slide = React.forwardRef((props, ref) => (
  <SlideContainer ref={ref}>
    <img src={props.content} alt="gilmores" />
  </SlideContainer>
));
