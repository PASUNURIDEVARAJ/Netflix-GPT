import React, { useState } from 'react'
import Header from './Header';
import { BG_LOGO } from '../utils/constants';
import { Validate } from '../utils/Validate';
import { useRef } from 'react';
import {  createUserWithEmailAndPassword,
   signInWithEmailAndPassword , updateProfile} from "firebase/auth"
import{auth} from "../utils/firebase"
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[isSignform, setIsSignForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)

  const handleClick = ()=> {
    console.log(email.current.value)
    console.log(password.current.value)

    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return; // shows error if credentials are wrong

    if(!isSignform){
      //Sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
      )

     .then((userCredential) => {
    // Signed up  successfull
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, 
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        const {uid, email, displayName ,photoURL} = auth.currentUser;
                  dispatch(addUser({
                    uid : uid,
                    email : email,
                    displayName :displayName,
                    photoURL : photoURL
                  }));

        navigate("/browse")
        // ...
      }).catch((error) => {
        // An error occurred
        setErrorMessage(error.message)
        // ...
      });
    console.log(user)
    

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage + "," + errorMessage)
    // ..
  });
    }
    else{
      // sign in logic success
      signInWithEmailAndPassword(  
        auth, 
        email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " "+ errorMessage)
  });
  
    }




  }
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
          ref={name}
          type='text'
          placeholder='Name'
          className='p-4 my-4 w-full rounded-md  bg-gray-500 bg-opacity-50'></input>  
       )}
        <input 
        ref={email}
        type='text'
        placeholder='email'
        className='p-4 my-4 w-full rounded-md  bg-gray-500 bg-opacity-50'></input>
        <input
        ref={password}
        type='password'
        placeholder='password'
        className='p-4 my-4 w-full rounded-md bg-gray-500 bg-opacity-50'>
         </input>
         <p className='text-red-500'>{errorMessage}</p>
         <button
         className='p-4 my-4 bg-red-600 rounded-md w-full cursor-pointer' onClick={handleClick}>
          {isSignform ? "Sign In" : "Sign Up"}</button>
         <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignform ? "new to netflix ? Sign In Now" : "already registerd ? Sign In"}
         </p>
      </form>
    </div>
  )
}

export default Login;