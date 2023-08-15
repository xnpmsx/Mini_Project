import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        Logo
      </div> 
      <div className="in">
        <div className='sign'>
          SIGN IN
        </div>
        <div className='log'>
          LOG IN
        </div>
      </div>
    </div>
  )
}

export default Navbar
