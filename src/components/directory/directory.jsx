import React from "react";
import MenuItem from "../menu-item/menuItem";
import "./directory.scss";

const menuItems = [
  {
    _id: 1,
    imgSrc: "img/t-1.jpg",
    title: "Hats",
  },
  {
    _id: 2,
    imgSrc: "img/t-2.jpg",
    title: "Jackets",
  },
  {
    _id: 3,
    imgSrc: "img/t-3.jpg",
    title: "Sneckers",
  },
  {
    _id: 4,
    imgSrc: "img/t-4.jpg",
    title: "Women",
    size: "large",
  },
  {
    _id: 5,
    imgSrc: "img/t-5.jpg",
    title: "Men",
    size: "large",
  },
];

const Directory = (props) => {
  return (
    <div className="directory-menu">
      {menuItems.map((menuItem) => (
        <MenuItem
          title={menuItem.title}
          imgSrc={menuItem.imgSrc}
          size={menuItem.size}
        />
      ))}
    </div>
  );
};

export default Directory;
