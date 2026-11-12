import React from "react";
import MovieScreen from "./assets-folder/MovieScreen.png";
import { useState, useEffect } from "react";

const API_KEY = "f9b5d9901";

function Landing() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`,
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);

    const trimmedSearch = search.trim();
    if (trimmedSearch === "") {
      alert("Please enter a search term.");
      return;
    }
  }

  return (
    <div className="landing-container">
      <figure className="movie__screen--container">
        <img src={MovieScreen} alt="" />
      

      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      </figure>

      <p>Search Results for: {query} </p>
    </div>
  );
}

export default Landing;
