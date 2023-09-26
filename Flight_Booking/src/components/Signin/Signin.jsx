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
              <div className="regis-input-username">
                Username
                <input type="text" required />
              </div>
              <div className="regis-input-name">
                Name
                <input type="text" required />
              </div>
              <div className="regis-input-password">
                Password
                <input type="password" required />
              </div>
              <div className="regis-input-email">
                E-mail
                <input type="email" required />
              </div>
              <div className="regis-input-submit">
                <input type="submit" value={"Register"} required />
                <div className="regis-input-submit-tologin">
                  Already have account ? <Link to='/login'>Login</Link>
                </div>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Signin
