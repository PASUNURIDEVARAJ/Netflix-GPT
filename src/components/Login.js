import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true)
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
};
  return (
    <div>
        <Header/>
    <div className='absolute'>
     
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
     alt='logo'/>
     </div>
     <form className=' w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-85'>
      <h1 className=' font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
      <input 
      type='text' 
      placeholder='Email address'
      className='p-2 my-2 w-full bg-slate-700 bg-opacity-55'
      ></input>
      <input 
      type='password' 
      placeholder='password'
      className='p-2 my-2 w-full  bg-slate-700 bg-opacity-55'

      ></input>
      <button className='p-4 my-3 bg-red-700 w-full rounded-md' >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className='p-4 cursor-pointer ' onClick={toggleSignInForm}>
        {isSignInForm ? "new to netflix? Sign-in" : "already Registered"}</p>
      </form>
     </div>
     
  )
}

export default Login;

