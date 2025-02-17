import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
       <img 
       alt='movie Card'
       src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;