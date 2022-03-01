import React, { useState } from "react";
import "./slideApp.scss";
const slides = [
  {
    _id: 1,
    image:
      "https://media.istockphoto.com/photos/heart-shaped-red-box-with-ribbon-on-a-pink-pastel-background-pattern-picture-id1300580149?b=1&k=20&m=1300580149&s=170667a&w=0&h=1y1nQu1WPx4dDTaLTAM73ZN-Heo4DeuslDMmQbTA4GY=",
  },
  {
    _id: 2,
    image:
      "https://media.istockphoto.com/photos/valentines-day-composition-with-rose-flower-red-heart-and-gift-boxes-picture-id1361735480?b=1&k=20&m=1361735480&s=170667a&w=0&h=SpJf67QqFQbF5UzRh2X3mFb1U28Q-SpDO3w7GVenJ54=",
  },
  {
    _id: 3,
    image:
      "https://media.istockphoto.com/photos/white-rose-flower-isolated-on-white-picture-id1328152519?b=1&k=20&m=1328152519&s=170667a&w=0&h=s2MwATe-EbogQWM5lu1a82Qi9iPdzJKGEoSDMC7LwaM=",
  },
  {
    _id: 4,
    image:
      "https://media.istockphoto.com/photos/red-rose-picture-id1298194099?b=1&k=20&m=1298194099&s=170667a&w=0&h=L1WYQNJ__EFnuxJf5FyeltRncVCpV8vvuaqvlVvKwtA=",
  },
  {
    _id: 5,
    image:
      "https://images.unsplash.com/photo-1645973441891-975bcf46ba48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];
const SlideApp = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || length <= 0) return;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  console.log(current);

  return (
    <>
      <button id="prev" onClick={prevSlide}>
        Prev
      </button>
      <button id="next" onClick={nextSlide}>
        Next
      </button>
      <div className="slides">
        {slides.map((slide, index) => (
          <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <img key={slide._id} src={slide.image} alt="hello" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SlideApp;
