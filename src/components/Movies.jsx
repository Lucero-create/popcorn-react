import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Movies({ movies = [], query }) {
  const [filter, setFilter] = useState("MOST RECENT");

  const sortedMovies = [...movies].sort((a, b) => {
    if (filter === "MOST RECENT") return parseInt(b.Year) - parseInt(a.Year);
    return parseInt(a.Year) - parseInt(b.Year);
  });

  const Movie = ({ movie }) => {
    const [img, setImg] = useState();
    const mountedRef = useRef(true);
  }

  

  useEffect(() => {
    mountedRef.current = true;
    const image = new Image();
    image.src = movie.Poster;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
        setImg(image);
        }
        }, 300)
      };
      

      return () => {
        mountedRef.current = false;
      };
    
  });


  return (
    <div className="movies">
      <div className="movie__img--skeleton"></div>
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
            <div className="movie-poster" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />

              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <Link to={`/Movies/${movie.imdbID}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
