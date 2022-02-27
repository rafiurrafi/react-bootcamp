import React from "react";
const LeftNews = () => {
  return (
    <div className="left-news">
      <div className="left-news__box mb-5">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem accusantium animi sunt nulla, omnis dignissimos
          aperiam!
        </h3>
        <div className="left-news__meta py-3 d-flex">
          <a href="" className="meta__link meta__link--border pr-2">
            Vladimir Putin
          </a>
          <p className="left-news__date pl-2">June 19, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNews;
