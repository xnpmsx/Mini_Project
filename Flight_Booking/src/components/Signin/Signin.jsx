import React from 'react'
import './Signin.css'
import { FaUser } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
    <div className="container">
      <div class="wrapper">
          <form action="">
              <h1>Register</h1>
              <div class="input-box">
                <input type="text" placeholder='Username' required />
                <div className="i"><FaUser /></div>
              </div>
              <div class="input-box">
                <input type="text" placeholder='Name' required />
                <div className="i"><FaUser /></div>
              </div>
              <div class="input-box">
                <input type="text" placeholder='Surname' required />
                <div className="i"><FaUser /></div>
              </div>
              <div class="input-box">
                  <input type="email" name="" id="" placeholder='E-mail' />
                  <div className="i"><MdEmail /></div>
              </div>
              <div class="input-box">
                  <input type="password" placeholder='Password' required />
                  <div className="i"><HiLockClosed /></div>
              </div>
              <button type="submit" class="btn">Register</button>
              <div class="register-link">
                  <p>Already registered?
                      <Link to="/Login"> Login</Link>
                  </p>

              </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default Signin
