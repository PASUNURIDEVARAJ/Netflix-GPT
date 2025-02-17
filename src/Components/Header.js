import React from 'react'
import { HEADER_LOGO } from '../utils/constants';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  
  const handleLogout = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.

      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage")
    });
  }
  return (
    <div className='w-screen absolute px-3 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
      <img 
      className="w-44 "
       alt='header_logo' 
       src={HEADER_LOGO} 
      />
      {user && (
        <div className='flex'>
        <img 
        className='w-12 h-12 mt-3 mx-3 rounded-sm cursor-pointer '
        alt='userIcon' 
        src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
        <button 
      className='bg-red-500 text-black px-4  my-4 mx-2 rounded-lg'
      onClick={handleLogout}>Logout</button>
      </div>
      )}
    </div>
  )
}

export default Header;