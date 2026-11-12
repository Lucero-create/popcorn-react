import React from "react";
import { onFilterChange } from "../index.js";
import Movies from "https://www.omdbapi.com/?apikey=9b5d9901&s=${searchTerm}";

const MoviesComponent = ({ movies }) => {
const Movies = ({ movies: initialMovies }) => {
const [movies, setMovies ] = React.useState(initialMovies);
const getMovies = async (searchTerm) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=9b5d9901&s=${searchTerm}`,
  );
  const data = await response.json();
  setMovies(data.Search || []);
}
 

  const onFilterChange = () => {
    const searchTerm = document.querySelector("#searchInput").value;
    getMovies(searchTerm);
  }
  return (
    <div className="movies-container">
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" onChange={onFilterChange}>
          <option value="MOST RECENT">Most Recent</option>
          <option value="OLDEST">Oldest</option>
        </select>
      </div>
      <div id="movieWrapper" className="movie-wrapper"></div>
    </div>
  );
};
}

export default Movies;
