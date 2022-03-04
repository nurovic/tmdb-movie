import React, { useState, useEffect } from "react";
import "./MovieList.css";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import Trailer from "./Trailer";
const img = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);

  const { url } = useRouteMatch();
  const movieInfo = `https://api.themoviedb.org/3/movie/${url}?api_key=bb74ecdab3222c908dcc3495aeabee76&language=en-US`;

  const fetchInfo = async () => {
    const info = await axios.get(movieInfo);
    setMovie(info.data);
  };

  useEffect(() => {
    fetchInfo();
  });

  return (
    <div className="container">
      <div className="img-container">
        <img src={img + movie.poster_path} alt={"title"} />
      </div>
      <div className="movie-info">
        <h1>{movie.original_title}</h1>
        <ul>
          {movie.genres &&
            movie.genres.slice(0, 5).map((genre, i) => (
              <li key={i} className="list">
                {genre.name}
              </li>
            ))}
        </ul>
        <p>{movie.overview}</p>
        <a href={movie.homepage}>Visit WebSite. . .</a>
        <h2>Trailer</h2>
        <Trailer url={url} />
      </div>
    </div>
  );
};

export default MovieDetail;
