import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
      <div className="bg">
        <div className="img">
            
        </div>
        <form action="" method="post">
        <div className="regis">
            <h3>Register</h3>

           <div className="main">
            <div className="regis-input">
                <div className="regis-input-username">
                    Username
                    <input type="text" pattern='[a-z,A-Z,0-9]{8,15}' required />
                </div>
                <div className="regis-input-name">
                    Name
                    <input type="text" pattern='[a-z,A-Z,^[ก-๏\s]+$]{1,15}' required />
                </div>
                <div className="regis-input-name">
                    Surname
                    <input type="text" pattern='[a-z,A-Z,^[ก-๏\s]+$]{1,15}' required />
                </div>
            </div>
            <div className="regis-input2">
                <div className="regis-input-password">
                    Password
                    <input type="password" required />
                    </div>
                    <div className="regis-input-email">
                    E-mail
                    <input type="email" required />
                    </div>
                    <div className="regis-input-email">
                    Phone
                    <input type="number" required />
                    </div>
            </div>
           </div>
           <div className="regis-input-submit">
                <button>Register</button>
                <div className="regis-input-submit-tologin">
                  Already have account ? <Link to='/login'>Login</Link>
                </div>
              </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Signin
