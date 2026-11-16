import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Movies = [];

const MovieCard = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(
    () => Movies.find((movie) => String(movie.id) === String(id)) || null,
  );

  useEffect(() => {
    const foundMovie =
      Movies.find((movie) => String(movie.id) === String(id)) || null;
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main id="movies__main">
      <div className="movie__container">
        <div className="row">
          <div className="movie__selected--top">
            <Link to="/movies" className="movie__link">
              <FaArrowLeft icon="FaArrowLeft" />
            </Link>
            <Link to="/movies" className="movie__link">
              <h2 className="back">Back</h2>
            </Link>
          </div>

          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img
                src={movie.url}
                alt={movie.title}
                className="movie__selected--img"
              />
            </figure>

            <div className="movie__selected--description">
              <h2 className="movie__selected--title">{movie.title}</h2>
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
    </main>
  );
};

export default MovieCard;
