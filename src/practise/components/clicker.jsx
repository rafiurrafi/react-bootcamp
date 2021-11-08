import React, { useEffect, useState } from "react";
import axios from "axios";
// https://swapi.dev/api/films/1/
const Clicker = (props) => {
  const [number, setNumber] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/" + number)
      .then((response) => setTitle(response.data.title));
  }, [number]);
  return (
    <div>
      <h1>{title}</h1>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default Clicker;
