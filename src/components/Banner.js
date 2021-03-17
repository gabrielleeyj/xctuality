import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import axios from "./axios";
import { Link } from "react-router-dom";

const api_key = "d431e3825c6c47923e22a5dc91f52227";

function Banner() {
  const [movie, setMovie] = useState([]);

  const { addMovieToCart, moveToWatchlist, watchlist, cart } = useContext(
    GlobalContext
  );

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieCart = cart.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : storedMovieCart ? true : false;
  const cartDisabled = storedMovieCart ? true : false;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // test to see if it works
  //   console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        {/** optional chaining */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/** div > 2 buttons */}
        <div className="banner__buttons">
          <Link to={`/movie/${movie.id}`}>
            <button className="banner__button">Read</button>
          </Link>
          <button
            className="banner__button"
            disabled={watchlistDisabled}
            onClick={() => moveToWatchlist(movie)}
          >
            + List
          </button>
          <button
            className="banner__button"
            disabled={cartDisabled}
            onClick={() => addMovieToCart(movie)}
          >
            + Cart
          </button>
        </div>

        {/*description*/}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
