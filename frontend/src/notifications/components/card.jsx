import React, { useState } from "react";
import Heart from "../img/heart.svg";
import HeartFilled from "../img/heartFilled.svg";
import Comment from "../img/comment.svg";
import Share from "../img/share.svg";
import Info from "../img/info.svg";
import "../styles/card.scss";
const Card = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleNotification = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="card-user-img" />
        <span>{post.fullName}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="cardIcon">
        <img
          src={isLiked ? HeartFilled : Heart}
          alt=""
          className="cardImg"
          onClick={handleNotification}
        />
        <img src={Comment} alt="" className="cardImg" />
        <img src={Share} alt="" className="cardImg" />
        <img src={Info} alt="" className="cardImg" />
      </div>
    </div>
  );
};

export default Card;
