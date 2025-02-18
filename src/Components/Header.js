import React, { useEffect } from 'react'
import { HEADER_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  
  const handleLogout = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.

      
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage")
    });
  }
  useEffect(()=> {
    const unSubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName ,photoURL} = user;
        dispatch(addUser({
          uid : uid,
          email : email,
          displayName :displayName,
          photoURL : photoURL
        }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
     return() => unSubsribe();
  }, []);
   const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
   }
   const handleLanguageChange= (e)=> {
    dispatch(changeLanguage(e.target.value))
   }
  return (
    <div className='w-screen absolute px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
      <img 
      className="w-44 "
       alt='header_logo' 
       src={HEADER_LOGO} 
      />
      {user && (
        <div className='flex p-2 justify-between'>
         {showGptSearch && (
          <select className='px-2 m-4 bg-gray-900 text-white rounded-lg'
          onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identfier}
             value={lang.identfier}>
              {lang.name}
            </option>)}
          </select>
         )} 
         
          <buton className="py-3 px-4 my-4 bg-purple-600 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearch}>GPT search</buton>
         
      
        <button 
       className='bg-red-500 text-black px-4 py-3 my-4 mx-2 rounded-lg'
       onClick={handleLogout}>Logout</button>
        <img 
        className='w-12 h-12 mt-3 mx-3 rounded-sm cursor-pointer '
        alt='userIcon' 
        src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
      </div>
      )}
    </div>
  )
}

export default Header;