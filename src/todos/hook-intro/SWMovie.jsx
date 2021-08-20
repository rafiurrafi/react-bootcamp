import React, { useState } from 'react';
const SWMovie = (props) => {
    const [movieId, setMovieId] = useState(1)
    return ( <div><h1>Pick a movie</h1><select value = {movieId} onChange= {e => setMovieId(e.target.value)}>
        <option value = {1}>1</option>
        <option value = {2}>2</option>
        <option value = {3}>3</option>
        <option value = {4}>4</option>
        <option value = {5}>5</option>
    </select></div> );
}
 
export default SWMovie;