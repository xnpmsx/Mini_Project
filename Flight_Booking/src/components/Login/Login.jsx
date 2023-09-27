import React from 'react'
import './Login.css'
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
            <h3>Login</h3>

           <div className="regis-input">
              <div className="regis-input-username">
                Username
                <input type="text" required />
              </div>
              <div className="regis-input-password">
                Password
                <input type="password" required />
              </div>
              <div className="regis-input-submit">
                <input type="submit" value={"Login"} required />
                <div className="regis-input-submit-toregister">
                  Don't have an account ? <Link to='/signin'>Register</Link>
                </div>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Signin
