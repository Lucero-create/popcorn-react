import React from "react";
import MovieScreen from "../assets-folder/MovieScreen.png";

const Landing = () => {
  return (
    <div className="landing-container">
      <figure className="movie__screen--container">
        <img src={MovieScreen} alt="" />
      </figure>
      <h1>Search Movies</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search for a movie..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Landing;
