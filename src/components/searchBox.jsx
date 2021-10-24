import React from "react";
import "./styles/searchBox.scss";
const SearchBox = (props) => {
  return (
    <input
      type="search"
      placeholder="Search monster..."
      value={props.searchField}
      className="searchBox"
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;
