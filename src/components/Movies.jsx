import React, { useState } from "react";

const onFilterChange = (e) => {
  const selectedFilter = e.target.value;
  const movieWrapper = document.getElementById("movieWrapper");

  if (!movieWrapper) {
    return;
  }

  const movies = Array.from(movieWrapper.getElementsByClassName("movie"));

  if (selectedFilter === "MOST RECENT") {
    movies.sort((a, b) => {
      const dateA = new Date(a.getAttribute("data-release-date"));
      const dateB = new Date(b.getAttribute("data-release-date"));
      return dateB - dateA;
    });
  } else if (selectedFilter === "OLDEST") {
    movies.sort((a, b) => {
      const dateA = new Date(a.getAttribute("data-release-date"));
      const dateB = new Date(b.getAttribute("data-release-date"));
      return dateA - dateB;
    });
  }

  movies.forEach((movie) => movieWrapper.appendChild(movie));
};

function MoviesComponent({ movies = [] }) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedSearch = search.trim();
    if (trimmedSearch === "") {
      alert("Please enter a search term.");
      return;
    }

    setQuery(trimmedSearch);
  };

  return (
    <div className="movies-container">
      <div className="search-results">
        <p>Search Results for: {query}</p>
      </div>
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" onChange={onFilterChange}>
          <option value="MOST RECENT">Most Recent</option>
          <option value="OLDEST">Oldest</option>
        </select>
      </div>
      <div className="movie-wrapper" id="movieWrapper">
        {movies.map((movie) => (
          <div
            className="movie movie-card"
            key={movie.imdbID}
            data-release-date={movie.ReleaseDate || movie.Year}
          >
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesComponent;
