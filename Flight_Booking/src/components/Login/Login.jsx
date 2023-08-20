import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
const Login = () => {
  return (
    <>
    <div className="container">
    <div class="wrapper">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
              <input type="text" placeholder='Username' required  />
              <div className="i"><FaUser /></div>
            </div>
            <div class="input-box">
              <input type="password" placeholder='Password' required />
              <div className="i"><HiLockClosed /></div>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Don't have an account ?
                    <Link to="/Signin"> Register</Link>
                </p>

            </div>
        </form>
    </div>
    </div>
     
    
    </>
    
  )
}

export default Login
