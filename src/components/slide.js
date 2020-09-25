import React from "react";

export const Slide = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ height: "auto", width: "100%" }}>
    <img src={props.content} alt="gilmores" />
  </div>
));
