import React from 'react'
import './Signin.css'
import { FaUser } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
      <div className="bg">
        <div className="img">
            
        </div>
        <div className="regis">
            <h3>Register</h3>

           <div className="regis-input">
              Username
              <input type="text" required />
              Name
              <input type="text" required />
              Password
              <input type="password" required />
              E-mail
              <input type="email" required />
           </div>
        </div>
      </div>
    </>
  )
}

export default Signin
