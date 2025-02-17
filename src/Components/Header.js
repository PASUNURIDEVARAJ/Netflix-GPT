import React from 'react'
import { HEADER_LOGO } from '../utils/constants';

const Header = () => {
  return (
    <div className='absolute px-3 py-2 bg-gradient-to-b from-black z-10' >
      <img 
      className="w-44 "
       alt='header_logo' 
       src={HEADER_LOGO} 
      />

    </div>
  )
}

export default Header;