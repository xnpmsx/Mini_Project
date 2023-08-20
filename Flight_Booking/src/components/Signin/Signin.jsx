import React from 'react'
import './Signin.css'

const Signin = () => {
  return (
    <>
    <div class="wrapper">
        <form action="">
            <h1>Register</h1>
            <div class="input-box">
              <input type="text" placeholder='Username' required />
            </div>
            <div class="input-box">
                <input type="email" name="" id="" placeholder='E-mail' />
            </div>
            <div class="input-box">
                <input type="password" placeholder='Password' required />
            </div>
            <button type="submit" class="btn">Register</button>
            <div class="register-link">
                <p>Already registered?
                    <a href="loginpage.html">Login</a>
                </p>

            </div>
        </form>
    </div>
    </>
  )
}

export default Signin
