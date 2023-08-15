import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <div className='nav'>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div> 
      <div className="in">
        <div className='sign'>
          <Link to="/Signin">SIGN IN</Link>
        </div>
        <div className='log'>
          <Link to="/Login">LOG IN</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
