import React from "react";

const SearchBox = (props) => {
  return (
    <input
      type="search"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
