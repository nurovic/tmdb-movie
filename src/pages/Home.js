import React, {useState, useEffect} from 'react'
import MovieList from "../components/MoviesList"

import axios from "axios"

const url = "https://api.themoviedb.org/3/discover/movie?api_key=bb74ecdab3222c908dcc3495aeabee76&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"


const Home = () => {

    const [movies, setMovies] = useState([])
    const fetchMovie = async () => {
        const movieList = await axios.get(url)
        console.log(movieList.data.results);
        setMovies(movieList.data.results)
    }
    useEffect(() => {
        fetchMovie()
    }, [])

  return (
    <div>
        <MovieList movies={movies}/> 
    </div>
  )
}

export default Home