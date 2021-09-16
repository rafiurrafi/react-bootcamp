import React from "react";

const Header = (props) => {
  const { page, onChangePage } = props;
  return (
    <div className="header">
      <a>Logo</a>
      <nav>
        <a onClick={() => onChangePage("home")}>Home</a>
        <a onClick={() => onChangePage("about")}>About</a>
        <a onClick={() => onChangePage("contact")}>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
