import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MovieCard = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=9b5d9901`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main id="movies__main">
      <div className="movie__selected--top">
        <Link to="/" className="movie__link">
          <FaArrowLeft icon="FaArrowLeft" />
        </Link>
        <Link to="/" className="search-container">
          <h2 className="back">Back</h2>
        </Link>
      </div>

      <div className="movie__container">
        <div className="movie__poster">
          <img src={movie.Poster} alt={movie.img} />
        </div>

        <div className="movie__facts">

        <div className="movie__info">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        

        <div className="movie__details">
          <div className="movie__details--title">Summary</div>
          <p>
            {movie.Plot || movie.Plot || "No description available."}
          </p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
