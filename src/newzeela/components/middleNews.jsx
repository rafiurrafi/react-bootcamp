import React from "react";
const MiddleNews = () => {
  return (
    <div className="middle-news">
      <img
        src="https://media.istockphoto.com/photos/determined-bicycle-kick-on-a-soccer-match-picture-id860880772?b=1&k=20&m=860880772&s=170667a&w=0&h=BLYDR0LW7SEVTnNec65oSkdMpQXqfJepbI16ojP4y8E="
        alt=""
        className="middle-news__img"
      />
      <div className="left-news__meta py-3 d-flex">
        <a href="" className="meta__link meta__link--border pr-2">
          Vladimir Putin
        </a>
        <p className="left-news__date meta__link--border px-2">June 19, 2022</p>
        <p className="left-news__date pl-2">Football</p>
      </div>
      <div className="middle-news__content">
        <h2 className="mb-3">
          The only way to prove you are a good sport is to lose.
        </h2>
        <p className="paragraph"></p>
        Pellentesque vulputate felis vitae tellus commodo, eu finibus elit
        consectetur. Duis posuere venenatis nunc sed auctor. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Aenean tempus dictum lacus non
        porttitor. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Sed a iaculis urna.
      </div>
    </div>
  );
};

export default MiddleNews;
