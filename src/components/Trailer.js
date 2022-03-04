import React, { useState, useEffect } from "react";
import axios from "axios";
const Trailer = ({ url }) => {
  const [trailer, setTrailer] = useState([]);
  const movieTrailer = `https://api.themoviedb.org/3/movie/${url}/videos?api_key=bb74ecdab3222c908dcc3495aeabee76&language=en-US`;

  const fetchTrailer = async () => {
    const trailer = await axios.get(movieTrailer);
    setTrailer(trailer.data.results[0].key);
  };

  const youTube = "https://www.youtube.com/embed/" + trailer;

  useEffect(() => {
    fetchTrailer();
  }, []);
  return (
    <>
      <iframe width="640" height="400" src={youTube}></iframe>
    </>
  );
};

export default Trailer;
