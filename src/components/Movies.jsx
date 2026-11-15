import React, { useState } from "react";
const Movies = () => {

function Movies ({ movies = [], query }) {
  const [filter, setFilter, Link ] = useState("MOST RECENT");
  

  const sortedMovies = [...movies].sort((a, b) => {
    if (filter === "MOST RECENT") return parseInt(b.Year) - parseInt(a.Year);
    return parseInt(a.Year) - parseInt(b.Year);
  });

  return (
    <div className="movies-container">
      <div className="search-results">
        <p>Search Results for: {query}</p>
      </div>
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="MOST RECENT">Most Recent</option>
          <option value="OLDEST">Oldest</option>
        </select>
      </div>

      <div className="movie-wrapper">
        {sortedMovies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <Link to="/MovieCard" className="movie-link"></Link>
          </div>
        ))}
      </div>
    </div>
  );
}};

export default Movies;
