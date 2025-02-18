import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/LanguageConstants';
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (

    <div className="pt-[7%] flex justify-center" >
      <form  className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
      onSubmit={(e)=> e.preventDefault()}>
       <input 
       className="p-4 m-4 col-span-9 rounded-lg"
       type="text"
       placeholder={lang[langKey].gptSearchPlaceholder}
      >
       </input>
       <button  className="py-2 m-4 px-2 col-span-3 bg-red-600 text-white rounded-lg">
        {lang[langKey].search}</button>  
      </form>
    </div>
  )
}

export default GptSearchBar;