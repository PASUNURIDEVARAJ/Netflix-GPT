import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)
  return (
    <div className=" bg-black ">
      <div className="-mt-52 pl-6 relative z-20">
     
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies.UpComingMovies}/>

    </div>
    </div>
  )
}

export default SecondaryContainer;