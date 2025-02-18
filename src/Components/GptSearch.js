import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_LOGO } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
            <img alt='bg-logo' src={BG_LOGO}/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;