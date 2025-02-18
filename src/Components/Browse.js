import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
// import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies()
   useTopRatedMovies();
  useUpComingMovies();


  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/> : (
        <>
         <MainContainer/>
         <SecondaryContainer/>
        </>
      ) }
      
   
     
      
    </div>
  )
}

export default Browse;