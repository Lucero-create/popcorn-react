import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MovieCard = ({ movie }) => {


  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div id="movies__body">
      <main id="movies__main">
        <div className="movie-post-container">
          <div className="row">
            <div className="movie__selected--top">
              <Link
                to="/movies"
                className="movie__link"
                aria-label="Back to movies">
               <FaArrowLeft />
              </Link>
              <Link to="/movies" className="movies__link">
                <h2 className="back">Back</h2>
              </Link>
            </div>

            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img
                  src={movie.poster || movie.image || ""}
                  alt={movie.title || "Movie poster"}
                  className="movie__selected--img"
                />
              </figure>

              <div className="movie__selected--description">
                <div className="movie__selected--title">
                  <h1>{movie.title}</h1>
                  <div className="movie__selected--year">
                    <span>{movie.year || movie.releaseDate || ""}</span>
                  </div>
                </div>

                <div className="movie__details">
                  <div className="movie__details--title">Details</div>
                  <p>
                    {movie.description ||
                      movie.summary ||
                      "No description available."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieCard;
