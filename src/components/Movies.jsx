import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const image = new Image();
    let timeoutId;

    image.src = movie.Poster;


    image.onload = () => {
      timeoutId = setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 800);
    };

    return () => {
      mountedRef.current = false;
      if (timeoutId) clearTimeout(timeoutId);
      image.onload = null;
    };
  }, [movie.Poster, movie.Title, movie.Year]);

  return (
  <div className="movie-poster">
    {img ? (
      < img className="imagen" src={img.src} alt={movie.Title} />
    ) : (
      <div className="movie__img--skeleton"></div>
    )}

    {img ? (
      <>
        <h2 className="movie-title">{movie.Title}</h2>
        <p classname="movie-year">{movie.Year}</p>
      </>
    ) : (
      <>
        <div className="movie__title--skeleton"></div>
        <div className="movie__year--skeleton"></div>
      </>
    )}

    <Link className="view-d" to={`/Movies/${movie.imdbID}`}>View Details</Link>
  </div>
);

}

function Movies({ movies = [], query }) {
  const [filter, setFilter] = useState("MOST RECENT");

  const sortedMovies = [...movies].sort((a, b) => {
    if (filter === "MOST RECENT") return parseInt(b.Year) - parseInt(a.Year);
    return parseInt(a.Year) - parseInt(b.Year);
  });

   return (
    <div className="movies-container">
      <div className="row">
      <div className="search-results">
        <p>Search Results for: {query}</p>
      
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        </div>
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
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Movies;
