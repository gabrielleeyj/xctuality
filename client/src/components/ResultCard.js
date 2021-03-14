import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToCart, watchlist, cart } = useContext(
    GlobalContext
  );

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieCart = cart.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : storedMovieCart ? true : false;

  const cartDisabled = storedMovieCart ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Favourites
          </button>

          <button
            className="btn"
            disabled={cartDisabled}
            onClick={() => addMovieToCart(movie)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
