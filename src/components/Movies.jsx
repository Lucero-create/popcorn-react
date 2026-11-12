import React, { useState } from "react";

const onFilterChange = (e) => {
  const selectedFilter = e.target.value;
  const movieWrapper = document.getElementById("movieWrapper");
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
}


function MoviesComponent() {
  const [search, setSearch, ] = useState("");
  const [query, setQuery] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);

    const trimmedSearch = search.trim();
    if (trimmedSearch === "") {
      alert("Please enter a search term.");
      return;
    }
  };

  
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


export default MoviesComponent;
