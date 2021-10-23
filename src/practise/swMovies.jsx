import React, { useEffect, useState } from "react";
import axios from "axios";
const SwMovies = (props) => {
  const [movieId, setMovieId] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getDate() {
      const response = await axios.get(
        "https://swapi.dev/api/films/" + movieId + "/"
      );
      setMovie(response.data);
    }
    getDate();
  }, [movieId]);
  return (
    <>
      <h1>Pick a movie</h1>
      <p>You selected {movie.title}</p>
      <select value={movieId} onChange={(e) => setMovieId(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </>
  );
};

export default SwMovies;
