import React, { useState } from 'react'
import Header from './Header';
import { BG_LOGO } from '../utils/constants';


const Login = () => {
  const[isSignform, setIsSignForm] = useState(true);

  const toggleSignInForm = ()=> {
      setIsSignForm(!isSignform);
  }

 

 

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img alt='bg-logo' src={BG_LOGO}/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
       className=' w-3/12 my-36 mx-auto left-0 right-0 absolute p-12  bg-black text-white bg-opacity-85 '>
        <h1 className='text-3xl py-4'
        >{isSignform ? "Sign In" : "Sign Up"}</h1>
       {!isSignform && (
          <input 
          type='text'
          placeholder='Name'
          className='p-4 my-4 w-full rounded-md  bg-gray-500 bg-opacity-50'></input>  
       )}
        <input 
        type='text'
        placeholder='email'
        className='p-4 my-4 w-full rounded-md  bg-gray-500 bg-opacity-50'></input>
        <input
        type='password'
        placeholder='password'
        className='p-4 my-4 w-full rounded-md bg-gray-500 bg-opacity-50'>
         </input>
         <button
         className='p-4 my-4 bg-red-600 rounded-md w-full cursor-pointer'>
          {isSignform ? "Sign In" : "Sign Up"}</button>
         <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignform ? "new to netflix ? Sign In Now" : "already registerd ? Sign In"}
         </p>
      </form>
    </div>
  )
}

export default Login;