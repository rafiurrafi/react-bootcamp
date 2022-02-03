import React from "react";
import { useState } from "react";
import "../styles/slides.scss";
let slides = [
  {
    background: "https://www.w3schools.com/w3images/coffee.jpg",
    text: "Coffee",
  },
  {
    background: "https://www.w3schools.com/w3images/workbench.jpg",
    text: "Workbench",
  },
  {
    background: "https://www.w3schools.com/w3images/sound.jpg",
    text: "Sound",
  },
];

const Sliders = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlide = () => {
    const slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  };
  const nextSlide = () => {
    const slide = activeSlide + 1 < slides.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  };
  console.log(activeSlide);
  return (
    <div className="sliders">
      {slides.map((slide) => (
        <Slide key={slide.text} {...slide} />
      ))}
      <button id="prev-slide" onClick={prevSlide}>
        Prev
      </button>
      <button id="next-slide" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

const Slide = ({ background }) => {
  console.log(background);
  return (
    <div
      className="slide"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};
export default Sliders;
