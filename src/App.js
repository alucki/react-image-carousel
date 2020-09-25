import React from "react";
import "./App.css";
import Slider from "./components/slider/slider";
import gilmore1 from "./images/gilmores1.jpeg";
import gilmore2 from "./images/gilmores2.jpeg";
import gilmore3 from "./images/gilmores3.jpeg";
import gilmore4 from "./images/gilmores4.jpeg";
import gilmore5 from "./images/gilmores5.jpeg";

function App() {
  const images = [gilmore1, gilmore2, gilmore3, gilmore4, gilmore5];

  return (
    <div className="App">
      <h1>React Image Carousel</h1>
      <Slider slides={images} />
    </div>
  );
}

export default App;
