import React, { useState } from "react";

const Searchbox = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <input
      type="search"
      placeholder="search"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Searchbox;
